import { createTheme } from "@material-ui/core/styles";

import { colors } from "./services";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    action: {
      disabled: colors.disableButtonColor,
    },
  },
  spacing: (value) => `${value * 8}px`,
  typography: {
    fontFamily: ["Poppins", "Roboto"],
    spacing: (value) => value ** 8,
    color: colors.secondary,

    root: {
      color: colors.secondary,
    },
    body1: {
      fontSize: "1.25rem",
      lineHeight: "28px",
      fontFamily: "Roboto",
      color: colors.charcoalDark,
    },
    h1: {
      fontSize: "48px",
      lineHeight: "54px",
      fontWeight: "normal",
    },
    h2: {
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: "normal",
    },
    h3: {
      fontSize: "32px",
      lineHeight: "36px",
    },
    h4: {
      fontSize: "24px",
      lineHeight: "28px",
    },
    h5: {
      fontSize: "20px",
      lineHeight: "24px",
    },
    h6: {
      fontSize: "16px",
      lineHeight: "22px",
    },
    body2: {
      fontSize: "14px",
      lineHeight: "22px",
    },
    subtitle1: {
      fontSize: "1rem",
      lineHeight: "22px",
      fontFamily: "Roboto",
      color: colors.charcoalLight,
    },
    subtitle2: {
      fontSize: "0.8rem",
      lineHeight: "22px",
      fontFamily: "Roboto",
      color: colors.charcoalLight,
    },
  },
  MuiButton: {
    root: {
      borderRadius: "50px",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          fontFamily: "Poppins",
        },
      },
    },
    MuiButton: {
      // Name of the rule
      root: {
        //borderRadius: '20px',
        textTransform: "none",
      },
      outlined: {
        padding: "8px 20px",
      },
      contained: {
        padding: "8px 20px",
      },
      containedPrimary: {
        color: colors.secondary,
      },
    },

    MuiSelect: {
      root: { color: "#c0c0c0" },
    },
    MuiList: {
      root: { background: "none" },
    },
    MuiTextField: {
      root: {
        margin: "10px",
        width: "25ch",
      },
    },
  },
  props: {
    // Name of the component ???
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application ????!
    },
  },
});

export default theme;
