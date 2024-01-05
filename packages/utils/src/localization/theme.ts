import createTheme from "@mui/material/styles/createTheme";
import { getContrastRatio, lighten, rgbToHex } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles/createTheme";

export const defaultColor = "#1a73e8";

export const initialTheme = {
  color: defaultColor,
  darkMode: false,
};

export const getContrastColor = (
  foreground: string,
  background: string
): string => {
  const ratio = getContrastRatio(foreground, background);
  if (ratio > 4) {
    return foreground;
  }
  return getContrastColor(rgbToHex(lighten(foreground, 0.1)), background);
};

export const getThemeOptions = (
  _color: string = initialTheme.color,
  darkMode: boolean = initialTheme.darkMode,
  direction: "ltr" | "rtl" = "ltr"
): ThemeOptions => {
  const color = darkMode ? getContrastColor(_color, "#424242") : _color;
  const type = darkMode ? "dark" : "light";
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("theme", type);
  }
  const theme = createTheme({
    direction,
    palette: {
      secondary: {
        main: color,
      },
      primary: {
        main: color,
      },
      error: {
        main: darkMode ? "#ff8f8f" : "#ea1a0b",
      },
      //@ts-ignore
      type,
    },
    typography: {
      fontFamily: '"Poppins", sans-serif',
      body1: {
        fontSize: "0.875rem",
      },
      body2: {
        fontSize: "0.75rem",
      },
    },
  });
  const shadows = theme.shadows;
  shadows[1] =
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px";
  shadows[2] =
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px";
  return {
    ...theme,
    shadows,
    //@ts-ignore
    overrides: {
      MuiTableCell: {
        root: {
          whiteSpace: "nowrap",
          position: "relative",
          fontSize: theme.typography.body1.fontSize,
          height: theme.spacing(5.5),
          padding: theme.spacing(1, 2),
        },
        paddingCheckbox: {
          padding: theme.spacing(0, 1),
        },
      },
      MuiListItemText: {
        dense: {
          fontSize: theme.typography.body1.fontSize,
          padding: theme.spacing(0, 1),
        },
      },
      MuiAvatar: {
        img: {
          width: "calc(100% - 2px)",
          height: "calc(100% - 2px)",
          borderRadius: "inherit",
          backgroundColor: "transparent",
        },
        root: {
          backgroundColor: theme.palette.primary.main,
          textTransform: "uppercase",
        },
      },
      MuiListItemIcon: {
        root: {
          marginRight: 0,
        },
      },
      MuiToolbar: {
        root: {
          height: theme.spacing(7),
          "@media (min-width: 600px)": {
            height: theme.spacing(8),
          },
        },
      },
      MuiTabs: {
        root: {
          minHeight: theme.spacing(5.5),
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
        },
      },
      MuiTab: {
        root: {
          textTransform: "none",
          margin: theme.spacing(0, 2),
          minWidth: 0,
          minHeight: theme.spacing(5.5),
          "&:first-child, &:last-child": {
            margin: 0,
          },
          "@media (min-width: 960px)": {
            minWidth: 0,
          },
        },
      },
      MuiIconButton: {
        root: {
          padding: 8,
        },
      },
      MuiLink: {
        root: {
          outline: "none",
          "&:focus": {
            outline: "none",
          },
        },
        underlineHover: {
          "&:focus": {
            textDecoration: "underline",
          },
        },
      },
      MuiCheckbox: {
        root: {
          padding: theme.spacing(0.5),
        },
      },
      MuiRadio: {
        root: {
          padding: theme.spacing(0.5),
        },
      },
      MuiFormControlLabel: {
        root: {
          marginLeft: 0,
        },
      },
      MuiCardHeader: {
        avatar: {
          alignSelf: "flex-start",
        },
      },
      MuiAccordionSummary: {
        root: {
          "&$focused": {
            backgroundColor: theme.palette.action.focus,
          },
          "&:hover": {
            "& $expandIcon": {
              backgroundColor: theme.palette.action.hover,
            },
          },
        },
        content: {
          maxWidth: "100%",
        },
      },
      MuiBackdrop: {
        root: {
          backdropFilter: "blur(4px)",
        },
      },
      MuiSvgIcon: {
        root: {
          verticalAlign: "middle",
        },
      },
      MuiDialog: {
        paper: {
          backgroundColor: theme.palette.background.default,
        },
      },
      MuiSelect: {
        select: {
          paddingRight: theme.spacing(2.5),
        },
        icon: {
          top: "50%",
          transform: "translateY(-50%)",
        },
        iconOpen: {
          transform: "rotate(180deg) translateY(50%)",
        },
      },
      MuiMenuItem: {
        root: {
          minHeight: theme.spacing(4),
        },
      },
      MuiFab: {
        root: {
          [theme.breakpoints.down("md")]: {
            width: theme.spacing(6),
            height: theme.spacing(6),
          },
        },
      },
    },
  };
};
