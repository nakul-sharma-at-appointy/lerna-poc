import { defaultLocale } from './locales'

export const localeToCurrencyFormatMap: Record<string, Record<string, string>> = {
    'af': {
        p: '!#,##0.00',
        g: ' ',
        d: ',',
    },
    'af-NA': {
        h: 'af',
    },
    'af-ZA': {
        h: 'af',
    },
    'agq': {
        p: '#,##0.00!',
        g: ' ',
        d: ',',
    },
    'agq-CM': {
        h: 'agq',
    },
    'ak': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'ak-GH': {
        h: 'ak',
    },
    'am': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'am-ET': {
        h: 'am',
    },
    'ar': {
        p: '! #,##0.00',
        g: ',',
        d: '.',
    },
    'ar-001': {
        h: 'ar',
    },
    'ar-AE': {
        h: 'ar',
    },
    'ar-BH': {
        p: '! #,##0.000',
        g: ',',
        d: '.',
    },
    'ar-DJ': {
        h: 'ar',
    },
    'ar-DZ': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'ar-EG': {
        h: 'ar',
    },
    'ar-EH': {
        h: 'ar',
    },
    'ar-ER': {
        h: 'ar',
    },
    'ar-IL': {
        h: 'ar',
    },
    'ar-IQ': {
        p: '! #,##0.000',
        g: ',',
        d: '.',
    },
    'ar-JO': {
        p: '! #,##0.000',
        g: ',',
        d: '.',
    },
    'ar-KM': {
        h: 'ar',
    },
    'ar-KW': {
        p: '! #,##0.000',
        g: ',',
        d: '.',
    },
    'ar-LB': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'ar-LY': {
        p: '! #,##0.000',
        g: '.',
        d: ',',
    },
    'ar-MA': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'ar-MR': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'ar-OM': {
        p: '! #,##0.000',
        g: ',',
        d: '.',
    },
    'ar-PS': {
        h: 'ar',
    },
    'ar-QA': {
        h: 'ar',
    },
    'ar-SA': {
        h: 'ar',
    },
    'ar-SD': {
        h: 'ar',
    },
    'ar-SO': {
        h: 'ar',
    },
    'ar-SS': {
        h: 'ar',
    },
    'ar-SY': {
        h: 'ar',
    },
    'ar-TD': {
        h: 'ar',
    },
    'ar-TN': {
        p: '! #,##0.000',
        g: '.',
        d: ',',
    },
    'ar-YE': {
        h: 'ar',
    },
    'as': {
        p: '! #,##,##0.00',
        g: ',',
        d: '.',
    },
    'as-IN': {
        h: 'as',
    },
    'asa': {
        p: '#,##0.00 !',
        g: ',',
        d: '.',
    },
    'asa-TZ': {
        h: 'asa',
    },
    'ast': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'ast-ES': {
        h: 'ast',
    },
    'az': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'az-Cyrl': {
        h: 'az',
    },
    'az-Cyrl-AZ': {
        h: 'az',
    },
    'az-Latn': {
        h: 'az',
    },
    'az-Latn-AZ': {
        h: 'az',
    },
    'bas': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'bas-CM': {
        h: 'bas',
    },
    'be': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'be-BY': {
        h: 'be',
    },
    'bem': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'bem-ZM': {
        h: 'bem',
    },
    'bez': {
        p: '#,##0.00!',
        g: ',',
        d: '.',
    },
    'bez-TZ': {
        h: 'bez',
    },
    'bg': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'bg-BG': {
        h: 'bg',
    },
    'bm': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'bm-ML': {
        h: 'bm',
    },
    'bn': {
        p: '#,##,##0.00!',
        g: ',',
        d: '.',
    },
    'bn-BD': {
        h: 'bn',
    },
    'bn-IN': {
        h: 'bn',
    },
    'bo': {
        p: '! #,##0.00',
        g: ',',
        d: '.',
    },
    'bo-CN': {
        h: 'bo',
    },
    'bo-IN': {
        h: 'bo',
    },
    'br': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'br-FR': {
        h: 'br',
    },
    'brx': {
        p: '! #,##,##0.00',
        g: ',',
        d: '.',
    },
    'brx-IN': {
        h: 'brx',
    },
    'bs': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'bs-Cyrl': {
        h: 'bs',
    },
    'bs-Cyrl-BA': {
        h: 'bs',
    },
    'bs-Latn': {
        h: 'bs',
    },
    'bs-Latn-BA': {
        h: 'bs',
    },
    'ca': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'ca-AD': {
        h: 'ca',
    },
    'ca-ES': {
        h: 'ca',
    },
    'ca-ES-VALENCIA': {
        h: 'ca',
    },
    'ca-FR': {
        h: 'ca',
    },
    'ca-IT': {
        h: 'ca',
    },
    'ce': {
        p: '#,##0.00 !',
        g: ',',
        d: '.',
    },
    'ce-RU': {
        h: 'ce',
    },
    'cgg': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'cgg-UG': {
        h: 'cgg',
    },
    'chr': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'chr-US': {
        h: 'chr',
    },
    'ckb': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'ckb-IQ': {
        h: 'ckb',
    },
    'ckb-IR': {
        h: 'ckb',
    },
    'cs': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'cs-CZ': {
        h: 'cs',
    },
    'cu': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'cu-RU': {
        h: 'cu',
    },
    'cy': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'cy-GB': {
        h: 'cy',
    },
    'da': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'da-DK': {
        h: 'da',
    },
    'da-GL': {
        h: 'da',
    },
    'dav': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'dav-KE': {
        h: 'dav',
    },
    'de': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'de-AT': {
        p: '! #,##0.00',
        g: ' ',
        d: ',',
    },
    'de-BE': {
        h: 'de',
    },
    'de-CH': {
        p: '! #,##0.00;!-#,##0.00',
        g: '\'',
        d: '.',
    },
    'de-DE': {
        h: 'de',
    },
    'de-LI': {
        p: '! #,##0.00',
        g: '\'',
        d: '.',
    },
    'de-LU': {
        h: 'de',
    },
    'dje': {
        p: '#,##0.00!',
        g: ' ',
        d: '.',
    },
    'dje-NE': {
        h: 'dje',
    },
    'dsb': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'dsb-DE': {
        h: 'dsb',
    },
    'dua': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'dua-CM': {
        h: 'dua',
    },
    'dyo': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'dyo-SN': {
        h: 'dyo',
    },
    'dz': {
        p: '!#,##,##0.00',
        g: ',',
        d: '.',
    },
    'dz-BT': {
        h: 'dz',
    },
    'ebu': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'ebu-KE': {
        h: 'ebu',
    },
    'ee': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'ee-GH': {
        h: 'ee',
    },
    'ee-TG': {
        h: 'ee',
    },
    'el': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'el-CY': {
        h: 'el',
    },
    'el-GR': {
        h: 'el',
    },
    'en': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'en-001': {
        h: 'en',
    },
    'en-150': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'en-AG': {
        h: 'en',
    },
    'en-AI': {
        h: 'en',
    },
    'en-AS': {
        h: 'en',
    },
    'en-AT': {
        p: '! #,##0.00',
        g: ',',
        d: '.',
    },
    'en-AU': {
        h: 'en',
    },
    'en-BB': {
        h: 'en',
    },
    'en-BE': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'en-BI': {
        h: 'en',
    },
    'en-BM': {
        h: 'en',
    },
    'en-BS': {
        h: 'en',
    },
    'en-BW': {
        h: 'en',
    },
    'en-BZ': {
        h: 'en',
    },
    'en-CA': {
        h: 'en',
    },
    'en-CC': {
        h: 'en',
    },
    'en-CH': {
        p: '! #,##0.00;!-#,##0.00',
        g: ',',
        d: '.',
    },
    'en-CK': {
        h: 'en',
    },
    'en-CM': {
        h: 'en',
    },
    'en-CX': {
        h: 'en',
    },
    'en-CY': {
        h: 'en',
    },
    'en-DE': {
        h: 'en',
    },
    'en-DG': {
        h: 'en',
    },
    'en-DK': {
        h: 'en',
    },
    'en-DM': {
        h: 'en',
    },
    'en-ER': {
        h: 'en',
    },
    'en-FI': {
        p: '!#,##0.00',
        g: ' ',
        d: '.',
    },
    'en-FJ': {
        h: 'en',
    },
    'en-FK': {
        h: 'en',
    },
    'en-FM': {
        h: 'en',
    },
    'en-GB': {
        h: 'en',
    },
    'en-GD': {
        h: 'en',
    },
    'en-GG': {
        h: 'en',
    },
    'en-GH': {
        h: 'en',
    },
    'en-GI': {
        h: 'en',
    },
    'en-GM': {
        h: 'en',
    },
    'en-GU': {
        h: 'en',
    },
    'en-GY': {
        h: 'en',
    },
    'en-HK': {
        h: 'en',
    },
    'en-IE': {
        h: 'en',
    },
    'en-IL': {
        h: 'en',
    },
    'en-IM': {
        h: 'en',
    },
    'en-IN': {
        p: '! #,##,##0.00',
        g: ',',
        d: '.',
    },
    'en-IO': {
        h: 'en',
    },
    'en-JE': {
        h: 'en',
    },
    'en-JM': {
        h: 'en',
    },
    'en-KE': {
        h: 'en',
    },
    'en-KI': {
        h: 'en',
    },
    'en-KN': {
        h: 'en',
    },
    'en-KY': {
        h: 'en',
    },
    'en-LC': {
        h: 'en',
    },
    'en-LR': {
        h: 'en',
    },
    'en-LS': {
        h: 'en',
    },
    'en-MG': {
        h: 'en',
    },
    'en-MH': {
        h: 'en',
    },
    'en-MO': {
        h: 'en',
    },
    'en-MP': {
        h: 'en',
    },
    'en-MS': {
        h: 'en',
    },
    'en-MT': {
        h: 'en',
    },
    'en-MU': {
        h: 'en',
    },
    'en-MW': {
        h: 'en',
    },
    'en-MY': {
        h: 'en',
    },
    'en-NA': {
        h: 'en',
    },
    'en-NF': {
        h: 'en',
    },
    'en-NG': {
        h: 'en',
    },
    'en-NL': {
        p: '! #,##0.00;! -#,##0.00',
        g: ',',
        d: '.',
    },
    'en-NR': {
        h: 'en',
    },
    'en-NU': {
        h: 'en',
    },
    'en-NZ': {
        h: 'en',
    },
    'en-PG': {
        h: 'en',
    },
    'en-PH': {
        h: 'en',
    },
    'en-PK': {
        h: 'en',
    },
    'en-PN': {
        h: 'en',
    },
    'en-PR': {
        h: 'en',
    },
    'en-PW': {
        h: 'en',
    },
    'en-RW': {
        h: 'en',
    },
    'en-SB': {
        h: 'en',
    },
    'en-SC': {
        h: 'en',
    },
    'en-SD': {
        h: 'en',
    },
    'en-SE': {
        p: '!#,##0.00',
        g: ' ',
        d: '.',
    },
    'en-SG': {
        h: 'en',
    },
    'en-SH': {
        h: 'en',
    },
    'en-SI': {
        h: 'en',
    },
    'en-SL': {
        h: 'en',
    },
    'en-SS': {
        h: 'en',
    },
    'en-SX': {
        h: 'en',
    },
    'en-SZ': {
        h: 'en',
    },
    'en-TC': {
        h: 'en',
    },
    'en-TK': {
        h: 'en',
    },
    'en-TO': {
        h: 'en',
    },
    'en-TT': {
        h: 'en',
    },
    'en-TV': {
        h: 'en',
    },
    'en-TZ': {
        h: 'en',
    },
    'en-UG': {
        h: 'en',
    },
    'en-UM': {
        h: 'en',
    },
    'en-US': {
        h: 'en',
    },
    'en-US-POSIX': {
        p: '! #0.00',
        g: ',',
        d: '.',
    },
    'en-VC': {
        h: 'en',
    },
    'en-VG': {
        h: 'en',
    },
    'en-VI': {
        h: 'en',
    },
    'en-VU': {
        h: 'en',
    },
    'en-WS': {
        h: 'en',
    },
    'en-ZA': {
        p: '!#,##0.00',
        g: ' ',
        d: ',',
    },
    'en-ZM': {
        h: 'en',
    },
    'en-ZW': {
        h: 'en',
    },
    'eo': {
        p: '!#,##0.00',
        g: ' ',
        d: ',',
    },
    'eo-001': {
        h: 'eo',
    },
    'es': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'es-419': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'es-AR': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'es-BO': {
        h: 'es',
    },
    'es-BR': {
        h: 'es',
    },
    'es-CL': {
        p: '!#,##0;!-#,##0',
        g: '.',
        d: ',',
    },
    'es-CO': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'es-CR': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'es-CU': {
        h: 'es',
    },
    'es-DO': {
        h: 'es',
    },
    'es-EA': {
        h: 'es',
    },
    'es-EC': {
        p: '!#,##0.00;!-#,##0.00',
        g: '.',
        d: ',',
    },
    'es-ES': {
        h: 'es',
    },
    'es-GQ': {
        p: '!#,##0.00',
        g: '.',
        d: ',',
    },
    'es-GT': {
        h: 'es',
    },
    'es-HN': {
        h: 'es',
    },
    'es-IC': {
        h: 'es',
    },
    'es-MX': {
        h: 'es',
    },
    'es-NI': {
        h: 'es',
    },
    'es-PA': {
        h: 'es',
    },
    'es-PE': {
        h: 'es',
    },
    'es-PH': {
        h: 'es',
    },
    'es-PR': {
        h: 'es',
    },
    'es-PY': {
        p: '! #,##0;! -#,##0',
        g: '.',
        d: ',',
    },
    'es-SV': {
        h: 'es',
    },
    'es-US': {
        h: 'es',
    },
    'es-UY': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'es-VE': {
        p: '!#,##0.00;!-#,##0.00',
        g: '.',
        d: ',',
    },
    'et': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'et-EE': {
        h: 'et',
    },
    'eu': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'eu-ES': {
        h: 'eu',
    },
    'ewo': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'ewo-CM': {
        h: 'ewo',
    },
    'fa': {
        p: '‎!#,##0.00',
        g: ',',
        d: '.',
    },
    'fa-AF': {
        h: 'fa',
    },
    'fa-IR': {
        h: 'fa',
    },
    'ff': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'ff-CM': {
        h: 'ff',
    },
    'ff-GN': {
        h: 'ff',
    },
    'ff-MR': {
        h: 'ff',
    },
    'ff-SN': {
        h: 'ff',
    },
    'fi': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'fi-FI': {
        h: 'fi',
    },
    'fil': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'fil-PH': {
        h: 'fil',
    },
    'fo': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'fo-DK': {
        h: 'fo',
    },
    'fo-FO': {
        h: 'fo',
    },
    'fr': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'fr-BE': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'fr-BF': {
        h: 'fr',
    },
    'fr-BI': {
        h: 'fr',
    },
    'fr-BJ': {
        h: 'fr',
    },
    'fr-BL': {
        h: 'fr',
    },
    'fr-CA': {
        h: 'fr',
    },
    'fr-CD': {
        h: 'fr',
    },
    'fr-CF': {
        h: 'fr',
    },
    'fr-CG': {
        h: 'fr',
    },
    'fr-CH': {
        p: '! #,##0.00;!-#,##0.00',
        g: ' ',
        d: '.',
    },
    'fr-CI': {
        h: 'fr',
    },
    'fr-CM': {
        h: 'fr',
    },
    'fr-DJ': {
        h: 'fr',
    },
    'fr-DZ': {
        h: 'fr',
    },
    'fr-FR': {
        h: 'fr',
    },
    'fr-GA': {
        h: 'fr',
    },
    'fr-GF': {
        h: 'fr',
    },
    'fr-GN': {
        p: '#,##0 !',
        g: ' ',
        d: ',',
    },
    'fr-GP': {
        h: 'fr',
    },
    'fr-GQ': {
        h: 'fr',
    },
    'fr-HT': {
        h: 'fr',
    },
    'fr-KM': {
        h: 'fr',
    },
    'fr-LU': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'fr-MA': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'fr-MC': {
        h: 'fr',
    },
    'fr-MF': {
        h: 'fr',
    },
    'fr-MG': {
        h: 'fr',
    },
    'fr-ML': {
        h: 'fr',
    },
    'fr-MQ': {
        h: 'fr',
    },
    'fr-MR': {
        h: 'fr',
    },
    'fr-MU': {
        h: 'fr',
    },
    'fr-NC': {
        h: 'fr',
    },
    'fr-NE': {
        h: 'fr',
    },
    'fr-PF': {
        h: 'fr',
    },
    'fr-PM': {
        h: 'fr',
    },
    'fr-RE': {
        h: 'fr',
    },
    'fr-RW': {
        h: 'fr',
    },
    'fr-SC': {
        h: 'fr',
    },
    'fr-SN': {
        h: 'fr',
    },
    'fr-SY': {
        h: 'fr',
    },
    'fr-TD': {
        h: 'fr',
    },
    'fr-TG': {
        h: 'fr',
    },
    'fr-TN': {
        h: 'fr',
    },
    'fr-VU': {
        h: 'fr',
    },
    'fr-WF': {
        h: 'fr',
    },
    'fr-YT': {
        h: 'fr',
    },
    'fur': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'fur-IT': {
        h: 'fur',
    },
    'fy': {
        p: '! #,##0.00;! #,##0.00-',
        g: '.',
        d: ',',
    },
    'fy-NL': {
        h: 'fy',
    },
    'ga': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'ga-IE': {
        h: 'ga',
    },
    'gd': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'gd-GB': {
        h: 'gd',
    },
    'gl': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'gl-ES': {
        h: 'gl',
    },
    'gsw': {
        p: '#,##0.00 !',
        g: '’',
        d: '.',
    },
    'gsw-CH': {
        h: 'gsw',
    },
    'gsw-FR': {
        h: 'gsw',
    },
    'gsw-LI': {
        h: 'gsw',
    },
    'gu': {
        p: '!#,##,##0.00',
        g: ',',
        d: '.',
    },
    'gu-IN': {
        h: 'gu',
    },
    'guz': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'guz-KE': {
        h: 'guz',
    },
    'gv': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'gv-IM': {
        h: 'gv',
    },
    'ha': {
        p: '! #,##0.00',
        g: ',',
        d: '.',
    },
    'ha-GH': {
        h: 'ha',
    },
    'ha-NE': {
        h: 'ha',
    },
    'ha-NG': {
        h: 'ha',
    },
    'haw': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'haw-US': {
        h: 'haw',
    },
    'he': {
        p: '#,##0.00 !',
        g: ',',
        d: '.',
    },
    'he-IL': {
        h: 'he',
    },
    'hi': {
        p: '!#,##,##0.00',
        g: ',',
        d: '.',
    },
    'hi-IN': {
        h: 'hi',
    },
    'hr': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'hr-BA': {
        h: 'hr',
    },
    'hr-HR': {
        h: 'hr',
    },
    'hsb': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'hsb-DE': {
        h: 'hsb',
    },
    'hu': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'hu-HU': {
        h: 'hu',
    },
    'hy': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'hy-AM': {
        h: 'hy',
    },
    'id': {
        p: '!#,##0.00',
        g: '.',
        d: ',',
    },
    'id-ID': {
        h: 'id',
    },
    'ig': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'ig-NG': {
        h: 'ig',
    },
    'ii': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'ii-CN': {
        h: 'ii',
    },
    'is': {
        p: '#,##0 !',
        g: '.',
        d: ',',
    },
    'is-IS': {
        h: 'is',
    },
    'it': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'it-CH': {
        p: '! #,##0.00;!-#,##0.00',
        g: '\'',
        d: '.',
    },
    'it-IT': {
        h: 'it',
    },
    'it-SM': {
        h: 'it',
    },
    'ja': {
        p: '!#,##0',
        g: ',',
        d: '.',
    },
    'ja-JP': {
        h: 'ja',
    },
    'jgo': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'jgo-CM': {
        h: 'jgo',
    },
    'jmc': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'jmc-TZ': {
        h: 'jmc',
    },
    'ka': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'ka-GE': {
        h: 'ka',
    },
    'kab': {
        p: '#,##0.00!',
        g: ' ',
        d: ',',
    },
    'kab-DZ': {
        h: 'kab',
    },
    'kam': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'kam-KE': {
        h: 'kam',
    },
    'kde': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'kde-TZ': {
        h: 'kde',
    },
    'kea': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'kea-CV': {
        h: 'kea',
    },
    'khq': {
        p: '#,##0.00!',
        g: ' ',
        d: '.',
    },
    'khq-ML': {
        h: 'khq',
    },
    'ki': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'ki-KE': {
        h: 'ki',
    },
    'kk': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'kk-KZ': {
        h: 'kk',
    },
    'kkj': {
        p: '!#,##0.00',
        g: '.',
        d: ',',
    },
    'kkj-CM': {
        h: 'kkj',
    },
    'kl': {
        p: '!#,##0.00;!-#,##0.00',
        g: '.',
        d: ',',
    },
    'kl-GL': {
        h: 'kl',
    },
    'kln': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'kln-KE': {
        h: 'kln',
    },
    'km': {
        p: '!#,##0.00',
        g: '.',
        d: ',',
    },
    'km-KH': {
        h: 'km',
    },
    'kn': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'kn-IN': {
        h: 'kn',
    },
    'ko': {
        p: '!#,##0',
        g: ',',
        d: '.',
    },
    'ko-KP': {
        h: 'ko',
    },
    'ko-KR': {
        h: 'ko',
    },
    'kok': {
        p: '! #,##,##0.00',
        g: ',',
        d: '.',
    },
    'kok-IN': {
        h: 'kok',
    },
    'ks': {
        p: '! #,##,##0.00',
        g: ',',
        d: '.',
    },
    'ks-IN': {
        h: 'ks',
    },
    'ksb': {
        p: '#,##0.00!',
        g: ',',
        d: '.',
    },
    'ksb-TZ': {
        h: 'ksb',
    },
    'ksf': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'ksf-CM': {
        h: 'ksf',
    },
    'ksh': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'ksh-DE': {
        h: 'ksh',
    },
    'kw': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'kw-GB': {
        h: 'kw',
    },
    'ky': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'ky-KG': {
        h: 'ky',
    },
    'lag': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'lag-TZ': {
        h: 'lag',
    },
    'lb': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'lb-LU': {
        h: 'lb',
    },
    'lg': {
        p: '#,##0.00!',
        g: ',',
        d: '.',
    },
    'lg-UG': {
        h: 'lg',
    },
    'lkt': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'lkt-US': {
        h: 'lkt',
    },
    'ln': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'ln-AO': {
        h: 'ln',
    },
    'ln-CD': {
        h: 'ln',
    },
    'ln-CF': {
        h: 'ln',
    },
    'ln-CG': {
        h: 'ln',
    },
    'lo': {
        p: '!#,##0.00;!-#,##0.00',
        g: '.',
        d: ',',
    },
    'lo-LA': {
        h: 'lo',
    },
    'lrc': {
        p: '! #,##0.00',
        g: ',',
        d: '.',
    },
    'lrc-IQ': {
        h: 'lrc',
    },
    'lrc-IR': {
        h: 'lrc',
    },
    'lt': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'lt-LT': {
        h: 'lt',
    },
    'lu': {
        p: '#,##0.00!',
        g: '.',
        d: ',',
    },
    'lu-CD': {
        h: 'lu',
    },
    'luo': {
        p: '#,##0.00!',
        g: ',',
        d: '.',
    },
    'luo-KE': {
        h: 'luo',
    },
    'luy': {
        p: '!#,##0.00;!- #,##0.00',
        g: ',',
        d: '.',
    },
    'luy-KE': {
        h: 'luy',
    },
    'lv': {
        p: '#0.00 !',
        g: ' ',
        d: ',',
    },
    'lv-LV': {
        h: 'lv',
    },
    'mas': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'mas-KE': {
        h: 'mas',
    },
    'mas-TZ': {
        h: 'mas',
    },
    'mer': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'mer-KE': {
        h: 'mer',
    },
    'mfe': {
        p: '!#,##0.00',
        g: ' ',
        d: '.',
    },
    'mfe-MU': {
        h: 'mfe',
    },
    'mg': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'mg-MG': {
        h: 'mg',
    },
    'mgh': {
        p: '!#,##0.00',
        g: '.',
        d: ',',
    },
    'mgh-MZ': {
        h: 'mgh',
    },
    'mgo': {
        p: '! #,##0.00',
        g: ',',
        d: '.',
    },
    'mgo-CM': {
        h: 'mgo',
    },
    'mk': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'mk-MK': {
        h: 'mk',
    },
    'ml': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'ml-IN': {
        h: 'ml',
    },
    'mn': {
        p: '! #,##0.00',
        g: ',',
        d: '.',
    },
    'mn-MN': {
        h: 'mn',
    },
    'mr': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'mr-IN': {
        h: 'mr',
    },
    'ms': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'ms-BN': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'ms-MY': {
        h: 'ms',
    },
    'ms-SG': {
        h: 'ms',
    },
    'mt': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'mt-MT': {
        h: 'mt',
    },
    'mua': {
        p: '!#,##0.00',
        g: '.',
        d: ',',
    },
    'mua-CM': {
        h: 'mua',
    },
    'my': {
        p: '! #,##0.00',
        g: ',',
        d: '.',
    },
    'my-MM': {
        h: 'my',
    },
    'mzn': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'mzn-IR': {
        h: 'mzn',
    },
    'naq': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'naq-NA': {
        h: 'naq',
    },
    'nb': {
        p: '! #,##0.00',
        g: ' ',
        d: ',',
    },
    'nb-NO': {
        h: 'nb',
    },
    'nb-SJ': {
        h: 'nb',
    },
    'nd': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'nd-ZW': {
        h: 'nd',
    },
    'ne': {
        p: '! #,##0.00',
        g: ',',
        d: '.',
    },
    'ne-IN': {
        h: 'ne',
    },
    'ne-NP': {
        h: 'ne',
    },
    'nl': {
        p: '! #,##0.00;! -#,##0.00',
        g: '.',
        d: ',',
    },
    'nl-AW': {
        h: 'nl',
    },
    'nl-BE': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'nl-BQ': {
        h: 'nl',
    },
    'nl-CW': {
        h: 'nl',
    },
    'nl-NL': {
        h: 'nl',
    },
    'nl-SR': {
        h: 'nl',
    },
    'nl-SX': {
        h: 'nl',
    },
    'nmg': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'nmg-CM': {
        h: 'nmg',
    },
    'nn': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'nn-NO': {
        h: 'nn',
    },
    'nnh': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'nnh-CM': {
        h: 'nnh',
    },
    'nus': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'nus-SS': {
        h: 'nus',
    },
    'nyn': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'nyn-UG': {
        h: 'nyn',
    },
    'om': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'om-ET': {
        h: 'om',
    },
    'om-KE': {
        h: 'om',
    },
    'or': {
        p: '! #,##,##0.00',
        g: ',',
        d: '.',
    },
    'or-IN': {
        h: 'or',
    },
    'os': {
        p: '! #,##0.00',
        g: ' ',
        d: ',',
    },
    'os-GE': {
        h: 'os',
    },
    'os-RU': {
        h: 'os',
    },
    'pa': {
        p: '! #,##,##0.00',
        g: ',',
        d: '.',
    },
    'pa-Arab': {
        h: 'pa',
    },
    'pa-Arab-PK': {
        h: 'pa',
    },
    'pa-Guru': {
        h: 'pa',
    },
    'pa-Guru-IN': {
        h: 'pa',
    },
    'pl': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'pl-PL': {
        h: 'pl',
    },
    'prg': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'prg-001': {
        h: 'prg',
    },
    'ps': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'ps-AF': {
        h: 'ps',
    },
    'pt': {
        p: '!#,##0.00',
        g: '.',
        d: ',',
    },
    'pt-AO': {
        h: 'pt',
    },
    'pt-BR': {
        h: 'pt',
    },
    'pt-CH': {
        h: 'pt',
    },
    'pt-CV': {
        h: 'pt',
    },
    'pt-GQ': {
        h: 'pt',
    },
    'pt-GW': {
        h: 'pt',
    },
    'pt-LU': {
        h: 'pt',
    },
    'pt-MO': {
        h: 'pt',
    },
    'pt-MZ': {
        h: 'pt',
    },
    'pt-PT': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'pt-ST': {
        h: 'pt',
    },
    'pt-TL': {
        h: 'pt',
    },
    'qu': {
        p: '! #,##0.00',
        g: ',',
        d: '.',
    },
    'qu-BO': {
        p: '! #,##0.00',
        g: '.',
        d: ',',
    },
    'qu-EC': {
        h: 'qu',
    },
    'qu-PE': {
        h: 'qu',
    },
    'rm': {
        p: '#,##0.00 !',
        g: '’',
        d: '.',
    },
    'rm-CH': {
        h: 'rm',
    },
    'rn': {
        p: '#,##0.00!',
        g: '.',
        d: ',',
    },
    'rn-BI': {
        h: 'rn',
    },
    'ro': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'ro-MD': {
        h: 'ro',
    },
    'ro-RO': {
        h: 'ro',
    },
    'rof': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'rof-TZ': {
        h: 'rof',
    },
    'root': {
        p: '! #,##0.00',
        g: ',',
        d: '.',
    },
    'ru': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'ru-BY': {
        h: 'ru',
    },
    'ru-KG': {
        h: 'ru',
    },
    'ru-KZ': {
        h: 'ru',
    },
    'ru-MD': {
        h: 'ru',
    },
    'ru-RU': {
        h: 'ru',
    },
    'ru-UA': {
        h: 'ru',
    },
    'rw': {
        p: '!#,##0.00',
        g: '.',
        d: ',',
    },
    'rw-RW': {
        h: 'rw',
    },
    'rwk': {
        p: '#,##0.00!',
        g: ',',
        d: '.',
    },
    'rwk-TZ': {
        h: 'rwk',
    },
    'sah': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'sah-RU': {
        h: 'sah',
    },
    'saq': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'saq-KE': {
        h: 'saq',
    },
    'sbp': {
        p: '#,##0.00!',
        g: ',',
        d: '.',
    },
    'sbp-TZ': {
        h: 'sbp',
    },
    'se': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'se-FI': {
        h: 'se',
    },
    'se-NO': {
        h: 'se',
    },
    'se-SE': {
        h: 'se',
    },
    'seh': {
        p: '#,##0.00!',
        g: '.',
        d: ',',
    },
    'seh-MZ': {
        h: 'seh',
    },
    'ses': {
        p: '#,##0.00!',
        g: ' ',
        d: '.',
    },
    'ses-ML': {
        h: 'ses',
    },
    'sg': {
        p: '!#,##0.00;!-#,##0.00',
        g: '.',
        d: ',',
    },
    'sg-CF': {
        h: 'sg',
    },
    'shi': {
        p: '#,##0.00!',
        g: ' ',
        d: ',',
    },
    'shi-Latn': {
        h: 'shi',
    },
    'shi-Latn-MA': {
        h: 'shi',
    },
    'shi-Tfng': {
        h: 'shi',
    },
    'shi-Tfng-MA': {
        h: 'shi',
    },
    'si': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'si-LK': {
        h: 'si',
    },
    'sk': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'sk-SK': {
        h: 'sk',
    },
    'sl': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'sl-SI': {
        h: 'sl',
    },
    'smn': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'smn-FI': {
        h: 'smn',
    },
    'sn': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'sn-ZW': {
        h: 'sn',
    },
    'so': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'so-DJ': {
        h: 'so',
    },
    'so-ET': {
        h: 'so',
    },
    'so-KE': {
        h: 'so',
    },
    'so-SO': {
        h: 'so',
    },
    'sq': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'sq-AL': {
        h: 'sq',
    },
    'sq-MK': {
        h: 'sq',
    },
    'sq-XK': {
        h: 'sq',
    },
    'sr': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'sr-Cyrl': {
        h: 'sr',
    },
    'sr-Cyrl-BA': {
        h: 'sr',
    },
    'sr-Cyrl-ME': {
        h: 'sr',
    },
    'sr-Cyrl-RS': {
        h: 'sr',
    },
    'sr-Cyrl-XK': {
        h: 'sr',
    },
    'sr-Latn': {
        h: 'sr',
    },
    'sr-Latn-BA': {
        h: 'sr',
    },
    'sr-Latn-ME': {
        h: 'sr',
    },
    'sr-Latn-RS': {
        h: 'sr',
    },
    'sr-Latn-XK': {
        h: 'sr',
    },
    'sv': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'sv-AX': {
        h: 'sv',
    },
    'sv-FI': {
        h: 'sv',
    },
    'sv-SE': {
        h: 'sv',
    },
    'sw': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'sw-CD': {
        p: '!#,##0.00',
        g: '.',
        d: ',',
    },
    'sw-KE': {
        h: 'sw',
    },
    'sw-TZ': {
        h: 'sw',
    },
    'sw-UG': {
        h: 'sw',
    },
    'ta': {
        p: '! #,##,##0.00',
        g: ',',
        d: '.',
    },
    'ta-IN': {
        h: 'ta',
    },
    'ta-LK': {
        h: 'ta',
    },
    'ta-MY': {
        p: '! #,##0.00',
        g: ',',
        d: '.',
    },
    'ta-SG': {
        p: '! #,##0.00',
        g: ',',
        d: '.',
    },
    'te': {
        p: '!#,##,##0.00',
        g: ',',
        d: '.',
    },
    'te-IN': {
        h: 'te',
    },
    'teo': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'teo-KE': {
        h: 'teo',
    },
    'teo-UG': {
        h: 'teo',
    },
    'th': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'th-TH': {
        h: 'th',
    },
    'ti': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'ti-ER': {
        h: 'ti',
    },
    'ti-ET': {
        h: 'ti',
    },
    'tk': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'tk-TM': {
        h: 'tk',
    },
    'to': {
        p: '! #,##0.00',
        g: ',',
        d: '.',
    },
    'to-TO': {
        h: 'to',
    },
    'tr': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'tr-CY': {
        h: 'tr',
    },
    'tr-TR': {
        h: 'tr',
    },
    'twq': {
        p: '#,##0.00!',
        g: ' ',
        d: '.',
    },
    'twq-NE': {
        h: 'twq',
    },
    'tzm': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'tzm-MA': {
        h: 'tzm',
    },
    'ug': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'ug-CN': {
        h: 'ug',
    },
    'uk': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'uk-UA': {
        h: 'uk',
    },
    'ur': {
        p: '! #,##,##0.00',
        g: ',',
        d: '.',
    },
    'ur-IN': {
        h: 'ur',
    },
    'ur-PK': {
        h: 'ur',
    },
    'uz': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'uz-Arab': {
        p: '#,##0.00 !',
        g: '.',
        d: ',',
    },
    'uz-Arab-AF': {
        h: 'uz',
    },
    'uz-Cyrl': {
        p: '! #,##0.00',
        g: ' ',
        d: ',',
    },
    'uz-Cyrl-UZ': {
        h: 'uz',
    },
    'uz-Latn': {
        h: 'uz',
    },
    'uz-Latn-UZ': {
        h: 'uz',
    },
    'vai': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'vai-Latn': {
        h: 'vai',
    },
    'vai-Latn-LR': {
        h: 'vai',
    },
    'vai-Vaii': {
        h: 'vai',
    },
    'vai-Vaii-LR': {
        h: 'vai',
    },
    'vi': {
        p: '#,##0 !',
        g: '.',
        d: ',',
    },
    'vi-VN': {
        h: 'vi',
    },
    'vo': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'vo-001': {
        h: 'vo',
    },
    'vun': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'vun-TZ': {
        h: 'vun',
    },
    'wae': {
        p: '!#,##0.00',
        g: '’',
        d: ',',
    },
    'wae-CH': {
        h: 'wae',
    },
    'xog': {
        p: '#,##0.00 !',
        g: ',',
        d: '.',
    },
    'xog-UG': {
        h: 'xog',
    },
    'yav': {
        p: '#,##0.00 !',
        g: ' ',
        d: ',',
    },
    'yav-CM': {
        h: 'yav',
    },
    'yi': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'yi-001': {
        h: 'yi',
    },
    'yo': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'yo-BJ': {
        h: 'yo',
    },
    'yo-NG': {
        h: 'yo',
    },
    'yue': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'yue-HK': {
        h: 'yue',
    },
    'zgh': {
        p: '#,##0.00!',
        g: ' ',
        d: ',',
    },
    'zgh-MA': {
        h: 'zgh',
    },
    'zh': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'zh-Hans': {
        h: 'zh',
    },
    'zh-Hans-CN': {
        h: 'zh',
    },
    'zh-Hans-HK': {
        h: 'zh',
    },
    'zh-Hans-MO': {
        h: 'zh',
    },
    'zh-Hans-SG': {
        h: 'zh',
    },
    'zh-Hant': {
        h: 'zh',
    },
    'zh-Hant-HK': {
        h: 'zh',
    },
    'zh-Hant-MO': {
        h: 'zh',
    },
    'zh-Hant-TW': {
        h: 'zh',
    },
    'zu': {
        p: '!#,##0.00',
        g: ',',
        d: '.',
    },
    'zu-ZA': {
        h: 'zu',
    },
}

export const defaultCurrencyFormat: Record<string, string> = localeToCurrencyFormatMap[defaultLocale]

export function localeToCurrencyFormat(locale?: string): Record<string, string> {
    return locale && localeToCurrencyFormatMap[locale] ? localeToCurrencyFormatMap[locale] : defaultCurrencyFormat
}

const currencyFormats: Record<string, string>[] = Object.values(localeToCurrencyFormatMap)
export default currencyFormats
