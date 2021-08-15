import { colors } from "./services";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ColorButton = withStyles((theme) => ({
  root: {
    width: "95%",
    height: "80px",
    borderRadius: "10px",
    fontSize: "24px",
    fontFamily: "Poppins",
    color: colors.secondary,
    backgroundColor: colors.reef,
    border: `1px solid ${colors.primary}`,
    "&:hover": {
      backgroundColor: colors.transparent,
      border: `1px solid ${colors.primary}`,
      color: colors.reef,
      fontWeight: "bold",
    },
  },
}))(Button);

const ColorButton2 = withStyles((theme) => ({
  root: {
    width: "95%",
    height: "80px",
    borderRadius: "10px",
    fontSize: "24px",
    fontFamily: "Poppins",
    color: colors.reef,
    backgroundColor: colors.transparent,
    border: `1px solid ${colors.primary}`,
    "&:hover": {
      color: "white",
      backgroundColor: colors.reef,
      border: `1px solid ${colors.primary}`,
      fontWeight: "bold",
    },
  },
}))(Button);

const backCoverImg = (image) => {
  return `./img/${image}`;
};

// const gridHover = (event) => {
//   event.target.style.transform = "scale(1.02,1.02)";
// };
// const gridNoHover = (event) => {
//   event.target.style.transform = "scale(1,1)";
// };
const handleScroll = () => {
  window.scroll({
    top: 600,
    left: 0,
    behavior: "smooth",
  });
};
export default {
  // gridHover,
  // gridNoHover,
  backCoverImg,
  handleScroll,
  ColorButton,
  ColorButton2,
  cardRadius: {
    borderRadius: "5px",
  },
  cardRadius2: {
    borderRadius: "20px",
  },
  colorWhite: {
    color: colors.secondary,
  },
  colorPrimary: {
    color: colors.primary,
  },
  colorYellow: {
    color: colors.yellow,
  },
  colorGrey: {
    color: colors.grey,
  },
  colorBlue: {
    color: colors.blue,
  },
  colorRed: {
    color: colors.red,
  },
  colorReef: {
    color: colors.reef,
  },
  colorCoral: {
    color: colors.coral,
  },
  colorCharcoalDark: {
    color: colors.charcoalDark,
  },
  colorCharcoalLight: {
    color: colors.charcoalLight,
  },
  blackBG: {
    background: "#000",
  },
  whiteBG: {
    background: "#fff",
  },
  reefBG: {
    background: colors.reef,
  },
  coralBG: {
    background: colors.coral,
  },
  colorTransparent: {
    background: colors.transparent,
  },
  boldTxt: {
    fontWeight: "bold",
  },
  boldNormal: {
    fontWeight: "normal",
  },
  fontRoboto: {
    fontFamily: "Roboto",
  },
  feildRadius: {
    borderRadius: "10px",
  },
  fontSize16: {
    fontSize: "16px",
  },
  greyBG: {
    background: "#111",
  },
  blueBG: {
    background: "#3e4e6d",
  },
  italicTxt: {
    fontStyle: "italic",
  },
  marginTop: {
    marginTop: "10px",
  },
  padding5: {
    padding: "5%",
  },
  padding1: {
    padding: "1%",
  },
  padding30tb: {
    padding: "30px 0",
  },
  padding40: {
    padding: "40px",
  },
  paddingLR: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  paddingRight5: {
    paddingRight: "5px",
  },
  spacingVertical: {
    padding: "100px 0",
  },

  leftTxt: {
    textAlign: "left",
  },

  centerTxt: {
    textAlign: "center",
  },
  banner: {
    paddingTop: "40px",
    height: "100vh",
    zIndex: 1000,
    overflow: "hidden",
  },
  deafultButton: {
    padding: "5px 20px",
    marginTop: "20px",
  },
  landingButton: {
    height: "85px",
    backgroundColor: "#FFDD33",
    borderRadius: "10px",
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: "24px",
    border: "none",
    margin: "0 0 100px 0",
    cursor: "pointer",
  },
  amAndpmButton: {
    "&:focus": {
      color: "white",
      backgroundColor: colors.reef,
      border: `1px solid ${colors.primary}`,
      fontWeight: "bold",
    },
  },
  thankyousubmitButton: {
    width: "100%",
    minHeight: "75px",
    cursor: "pointer",
    marginTop: "20px",
  },
  fixed: {
    position: "sticky",
    top: 0,
  },
  section01: {
    padding: "5%",
    color: colors.secondary,
    minHeight: "100vh",
    zIndex: 500,
    background: "#111",
  },
  txtBGCoral: {
    display: "table",
    background: colors.coral,
    borderRadius: "10px 0",
    padding: "10px",
  },
  txtBGSunshine: {
    display: "table",
    background: colors.sunshine,
    borderRadius: "10px 0",
    padding: "10px",
  },
  section01Content: {
    background: "#000",
    padding: "5%",
    textAlign: "center",
  },
  marginBottom: {
    marginBottom: "50px",
  },
  section02: {
    background: "#111",
    padding: "0 5%",
    minHeight: "80vh",
  },
  translucentContainer: {
    background: colors.translucentBG,
    padding: "20px",
  },
  fullHt: {
    minHeight: "100vh",
    background: "#fff",
  },
  fullHtNoBG: { height: "100vh" },
  highZ: {
    zIndex: 10000,
  },
  imgWidth: {
    width: "100%",
  },
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    padding: "15px",
    height: "100px",
  },
  popup: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    paddingTop: "120px",
    width: "100%",
    background: "#000",
  },
  footer: {
    //padding: "22px",
    background: "#fff",
    textAlign: "center",
  },
  spacing: (value) => `${value * 8}px`,
  //form styles
  formFieldContainer: {
    height: "68px",
    marginBottom: "10px",
  },
  formInputField: {
    borderColor: "#666666",
    color: "#666666",
    padding: "16px",
    height: "70px",
    border: "1px solid rgba(102, 102, 102, 0.3)",
    boxSizing: "border-box",
    borderRadius: "10px",
  },
  verticalScroll: {
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "280px",
  },
  whiteColor: { color: colors.secondary },
  err: { color: colors.err },
  err2: { color: colors.err, marginLeft: "10px" },
  special: { display: "inline-block", width: "5%", textAlign: "center" },
  countryContainer: { display: "inline-block", width: "15%" },
  mobileContainer: { display: "inline-block", width: "90%" },
};
