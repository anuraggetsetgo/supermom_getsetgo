import { createMuiTheme } from "@material-ui/core/styles";
// import Test from "./fonts/Exo2-Thin.ttf";
import TestThin from "./fonts/Montserrat-Thin.ttf";
import Exoheavy from "./fonts/Montserrat-SemiBold.ttf";
import Test from "./fonts/Montserrat-Regular.woff";
import { colors } from "./services";

const testThin = {
  fontFamily: "Test-Thin",
  fontStyle: "normal",
  fontDisplay: "swap",
  src: `
      local('Test'),
      local('Test-Thin'),
      url(${TestThin}) format('truetype')
     `
};

const test = {
  fontFamily: "Test",
  fontStyle: "normal",
  fontDisplay: "swap",
  src: `
      local('Test'),
      local('Test'),
      url(${Test}) format('woff')
    `
};

// const exo = {
//   fontFamily: "Exo",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   fontWeight: 400,
//   src: `
//     local('Exo'),
//     local('Exo-regular'),
//     url(${Exoregular}) format('woff')
//   `,
//   unicodeRange:
//     "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
// };
// const exoHeavy = {
//   fontFamily: "Exo",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   fontWeight: 500,
//   src: `
//       local('Exo'),
//       local('Exo-Heavy'),
//       url(${Exoheavy}) format('woff')
//     `,
//   unicodeRange:
//     "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
// };
// const exoBold = {
//   fontFamily: "Exo",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   fontWeight: 600,
//   src: `
//       local('Exo'),
//       local('Exo-Bold'),
//       url(${Exobold}) format('woff')
//     `,
//   unicodeRange:
//     "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF"
// };

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    }
  },
  typography: {
    // fontFamily: "Test, Arial",
    color: colors.secondary,
    root: {
      color: colors.secondary
    },
    body1: {
      fontSize: "1.3rem"
    },
    h1: {
      fontSize: "4.0rem",
      fontWeight: 600
    },
    h2: {
      fontSize: "2.1rem",
      fontWeight: 400
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 500
    },
    subtitle1: {
      fontSize: "1.5rem",
      lineHeight: "2.2rem"
    },
    subtitle2: {
      fontSize: "1.3rem",
      lineHeight: "1.8rem"
    }
  },
  MuiButton: {
    root: {
      borderRadius: "50px"
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": []
      }
    },
    MuiButton: {
      // Name of the rule
      root: {
        //borderRadius: '20px',
        textTransform: "none"
      },
      outlined: {
        padding: "8px 20px"
      },
      contained: {
        padding: "8px 20px"
      },
      containedPrimary: {
        color: colors.secondary
      }
    },
    MuiSelect: {
      root: { color: "#c0c0c0" }
    },
    MuiList: {
      root: { background: "none" }
    }
  },
  props: {
    // Name of the component ️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  }
});

export default theme;
