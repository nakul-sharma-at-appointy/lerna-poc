const { src, dest } = require("gulp");
const filter = require("gulp-filter");
const babel = require("gulp-babel");
const jeditor = require("gulp-json-editor");
const rimraf = require("gulp-rimraf");
const shell = require("gulp-shell");
const tsc = require("gulp-typescript");
const transform = require("gulp-transform");
const env = require("gulp-env");
const minimist = require("minimist");
const os = require("os");

const fs = require("fs-extra");
const _ = require("lodash");
const path = require("path");

const envs = env.set({
  NODE_ENV: "production",
});

const slash = os.platform() === "win32" ? "\\" : "/";

const relayCommand = (
  tsconfig,
  outputDir = "./src/__generated__",
  persist = ""
) => {
  try {
    require("relay-compiler");
    return `.${slash}node_modules${slash}.bin${slash}relay-compiler --src ./src --exclude 'stories/**/*' --extensions js jsx ts tsx --schema schema.graphql --language typescript  --customScalars.Duration=Int --customScalars.Timestamp=String --customScalars.Map=String --customScalars.Empty={} --customScalars.Bytes=String  --artifactDirectory ${outputDir} ${
      persist ? ` --persist-output ${persist}` : ``
    }`;
  } catch (e) {
    return `echo true`;
  }
};

const options = minimist(process.argv.slice(2));

const release = (tsconfig) => {
  const releaseCommands = [
    `git fetch --prune origin "+refs/tags/*:refs/tags/*"`,
    `standard-version --no-verify`,
    `gulp build`,
    `npm publish ${tsconfig.compilerOptions.outDir}`,
    `gulp build --next`,
    `npm publish ${tsconfig.compilerOptions.outDir} --tag next`,
  ];
  if (options.ci) {
    return shell.task(
      [
        ...releaseCommands,
        `(git push --follow-tags origin HEAD:master || echo true)`,
      ].join(" && ")
    );
  }
  if (options.force) {
    return shell.task(
      [
        ...releaseCommands,
        `(git push --follow-tags origin master || echo true)`,
      ].join(" && ")
    );
  }
  return shell.task(
    '(git add . || echo true) && (git commit -m "chore: new versions" || echo true) && (git push || echo true)'
  );
};

const clean = (tsconfig) =>
  src(tsconfig.compilerOptions.outDir, {
    read: false,
    allowEmpty: true,
  }).pipe(rimraf());

const copyPackage = (tsconfig, packageJson, deps, exactDeps) => {
  const _toRemove = ["@storybook"];
  const _toIgnore = ["@saastack/timepicker", "@saastack/logger", "@saastack/core-pubsub"];
  const _deps = [
    ...(deps || []),
    "@harryy",
    "@saastack",
    "@appointy",
    "@material-ui",
    "@lingui",
    "@types/lingui",
    "lodash",
    "@types/lodash",
    "@types/loadable",
    "@loadable",
    "react-sortablejs",
  ];
  const _exactDeps = [
    ...(exactDeps || []),
    "react",
    "react-dom",
    "@types/react",
    "@types/react-dom",
  ];
  return src(packageJson)
    .pipe(
      jeditor((json) => {
        if (options.next) {
          json.version = `${json.version}-next`;
        }
        const packages = Object.keys(json.dependencies || {}).filter(
          (k) =>
            !_toIgnore.includes(k) &&
            (_exactDeps.some((d) => k === d) ||
              _deps.some((d) => k.startsWith(d)))
        );
        if (packages.length) {
          json.peerDependencies = json.peerDependencies || {};
          packages.forEach((p) => {
            delete json.dependencies[p];
            json.peerDependencies[p] = "*";
          });
        }
        json.dependencies = _.omitBy(json.dependencies, (version, name) =>
          _toRemove.some((rem) => name.startsWith(rem))
        );
        delete json.private;
        delete json.devDependencies;
        delete json.scripts;
        delete json.husky;
        return json;
      })
    )
    .pipe(dest(tsconfig.compilerOptions.outDir));
};

const dts = (tsconfig) => {
  const command = relayCommand(
    tsconfig,
    undefined,
    options.next
      ? path.join(tsconfig.compilerOptions.outDir, "persisted-queries.json")
      : ""
  );
  require("child_process").execSync(command, { stdio: "inherit" });
  return src(tsconfig.include)
    .pipe(envs)
    .pipe(
      filter([
        "**/*.ts",
        "**/*.tsx",
        "**/*.js",
        "**/*.jsx",
        "!node_modules/**",
        "!node_modules/**/node_modules/**",
        "!**/node_modules/**",
        "!**/stories/**",
        "!**/stories",
        "!**/*stories.*",
        "!**/setupTests.*",
        "!**/react-app-env.*",
      ])
    )
    .pipe(tsc(tsconfig.compilerOptions))
    .dts.pipe(dest(tsconfig.compilerOptions.outDir));
};

const build = (tsconfig, babelConfig) => {
  return src(tsconfig.include)
    .pipe(
      filter([
        "**",
        "!**/stories/**",
        "!**/stories",
        "!**/*.stories.*",
        "!**/tests/**",
        "!**/tests",
        "!**/__tests__/**",
        "!**/__tests__",
        "!**/__snapshots__/**",
        "!**/__snapshots__",
        "!**/*.test.*",
        "!**/setupTests.*",
        "!**/react-app-env.*",
      ])
    )
    .pipe(babel(babelConfig))
    .pipe(
      transform("utf8", (content, file) => {
        switch (path.extname(file.path)) {
          case ".js":
            const find = "Trans, {";
            const re = new RegExp(find, "g");
            content = content.replace(re, "Trans, /*i18n*/ {");
            const find2 = "\\\\__generated__\\\\";
            const re2 = new RegExp(find2, "g");
            content = content.replace(re2, "/__generated__/");
            return content;
          default:
            return content;
        }
      })
    )
    .pipe(dest(tsconfig.compilerOptions.outDir));
};

const translate = (projectId, rootPath) => async (cb) => {
  const { TranslationServiceClient } = require("@google-cloud/translate").v3;
  const translationClient = new TranslationServiceClient();
  const linguiRc = fs.readJSONSync(path.resolve(rootPath, "./.linguirc"));
  const localeDir = linguiRc.localeDir.replace("<rootDir>", rootPath);

  const srcLoc = fs.readJSONSync(
    `${localeDir}/${linguiRc.sourceLocale}/messages.json`
  );
  const locales = _.chain(fs.readdirSync(localeDir))
    .filter((l) => l !== "_build" && l !== linguiRc.sourceLocale)
    .keyBy()
    .mapValues((l) => {
      const lc = fs.readJSONSync(`${localeDir}/${l}/messages.json`);
      return _.mapValues(lc, (v, k) => {
        if (k.includes("{")) {
          return v || srcLoc[k];
        }
        return v;
      });
    })
    .value();

  const filteredLocales = _.chain(locales)
    .mapValues((o) =>
      _.chain(o)
        .omitBy((value, key) => !key)
        .pickBy(_.isEmpty)
        .keys()
        .value()
    )
    .value();

  let requests = [];
  const request = {
    parent: translationClient.locationPath(projectId, "global"),
    mimeType: "text/plain",
    sourceLanguageCode: linguiRc.sourceLocale,
  };

  _.forEach(filteredLocales, (contents, targetLanguageCode) => {
    if (contents.length) {
      requests = [
        ...requests,
        translationClient
          .translateText({ ...request, contents, targetLanguageCode })
          .then((res) => ({
            [targetLanguageCode]: _.chain(res[0].translations)
              .mapKeys((t, i) => filteredLocales[targetLanguageCode][i])
              .mapValues((t) => t.translatedText)
              .value(),
          })),
      ];
    }
  });

  if (requests.length) {
    const res = await Promise.all(requests).catch(console.log);
    if (res) {
      _.forEach(res, (r) => {
        const l = _.keys(r)[0];
        const result = {
          ...locales[l],
          ...r[l],
        };
        fs.writeJSONSync(`${localeDir}/${l}/messages.json`, result, {
          spaces: 2,
        });
      });
    }
  }
  cb();
};

module.exports = {
  build,
  dts,
  release,
  clean,
  copyPackage,
  translate,
};
