import { colors } from "./services";

export default {
  marginBottom: { marginBottom: "20px" },
  BGPrimary: { background: colors.primary },
  largeAvatar: { width: "100px", height: "100px" },
  selectCoach: {
    border: `4px solid ${colors.primary}`,
    borderRadius: "15px",
    padding: "20px",
    marginTop: "15vh"
  },
  inclusions: {
    padding: "5%",
    background: colors.primary,
    color: `${colors.white}!important`
  },
  cursorPointer: { cursor: "pointer" },
  bigChip: { fontSize: "1.5em", fontWeight: "bold", padding: "20px 0" },
  colorWhite: {
    color: colors.secondary
  },
  colorPrimary: {
    color: colors.primary
  },
  colorGrey: {
    color: colors.grey
  },
  blackBG: {
    background: "#000"
  },
  greyBG: {
    background: "#111"
  },
  marginTop: {
    marginTop: "10px"
  },
  padding5: {
    padding: "5%"
  },
  padding1: {
    padding: "1%"
  },
  paddingLR: {
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  paddingRight5: {
    paddingRight: "5px"
  },
  spacingVertical: {
    padding: "100px 0"
  },
  centerTxt: {
    textAlign: "center"
  },
  banner: {
    minHeight: "100vh",
    paddingBottom: "20vh",
    zIndex: 1000,
    overflow: "hidden"
  },
  fixed: {
    position: "sticky",
    top: 0
  },
  section01: {
    padding: "5%",
    color: colors.secondary,
    minHeight: "100vh",
    zIndex: 500,
    background: "#111"
  },
  section01Content: {
    background: "#000",
    padding: "5%",
    textAlign: "center"
  },
  marginBottom: {
    marginBottom: "50px"
  },
  section02: {
    background: "#111",
    padding: "0 5%",
    minHeight: "100vh"
  },
  translucentContainer: {
    background: colors.translucentBG,
    padding: "20px"
  },
  fullHt: {
    minHeight: "100vh",
    background: "#111"
  },
  fullHtNoBG: { height: "100vh" },
  highZ: {
    zIndex: 10000
  },
  imgWidth: {
    width: "100%"
  },
  header: {
    padding: "20px",
    zIndex: 20000
  },
  popup: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    paddingTop: "120px",
    width: "100%",
    background: "#000"
  },
  footer: {
    padding: "50px",
    background: "#000",
    textAlign: "center"
  },
  //form styles
  formFieldContainer: {
    height: "95px",
    overflow: "hidden",
    marginBottom: "10px"
  },
  err: { color: colors.err },
  special: { display: "inline-block", width: "5%", textAlign: "center" },
  countryContainer: { display: "inline-block", width: "15%" },
  mobileContainer: { display: "inline-block", width: "75%" }
};
