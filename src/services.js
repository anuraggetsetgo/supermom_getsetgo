import Axios from "axios";
// import CryptoJS from 'crypto-js';
// import aes from 'crypto-js/aes';
// import encHex from 'crypto-js/enc-hex';
// import padZeroPadding from 'crypto-js/pad-zeropadding';
import config from "./config";
// let secret_key = encHex.parse(config.secret);
// let secret_iv = encHex.parse(config.iv);

function docHt() {
  return document.documentElement.clientHeight;
}
function s3GlobalPath(name, type) {
  return `https://gsg-image-uploads.s3-accelerate.amazonaws.com/webcontent/${type}/${name}`;
}
function retrievePath() {
  return "https://gsg-image-uploads.s3.amazonaws.com/Homeplan/";
}
let colors = {
  primary: "#4595A4",
  secondary: "#fff",
  transparent: "#ffffff00",
  disableButtonColor: "#ffffff85",
  yellow: "#FFDD3E",
  blue: "#3e4e6d",
  err: "red",
  grey: "#aaa",
  translucentBG: "rgb(101 97 141 / 42%)",
  red: "#FE0000",
  reef: "#103A42",
  coral: "#4595A4",
  charcoalDark: "#4D4D4D",
  charcoalLight: "#666666",
  sunshine: "#FFDD33",
};
function get(key) {
  return localStorage.getItem(key);
}
function set(key, value) {
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  return localStorage.setItem(key, value);
}
function getURL(url) {
  return `https://api.getsetgo.fitness/base_ind/API/v1/${url}`;
}
function updateLoc(cb) {
  if (!(get("loc") && get("products") && get("offer"))) {
    callAPI(
      "https://ipinfo.io/?token=22065f6a076bdf",
      "get",
      (data) => {
        changeLocation(data, cb);
      },
      (err) => {
        askLocation(err);
      }
    );
  }
  // changeLocation({});
}
function changeLocation(data, cb) {
  data = data.data;
  let locObj = {
    ip: data.ip,
    city: data.city,
    region: data.region,
    country: data.country,
  };
  set("loc", locObj);
  let region = "row";
  let AE = [
    "AE",
    "OM",
    "QA",
    "SA",
    "BH",
    "KW",
    "TR",
    "SY",
    "IR",
    "EG",
    "IQ",
    "IL",
    "YE",
    "LB",
    "JO",
    "PS",
    "CY",
    "IR",
  ];
  let IN = ["IN", "NP", "LK", "BT", "MM", "PK", "BD", "AF", "MV"];
  if (AE.indexOf(locObj.country) >= 0) region = "ae";
  if (IN.indexOf(locObj.country) >= 0) region = "in";
  // let entryptedRegion = encryption(`${region}|${(new Date(Date.now()))}`);
  // console.log("entryptedRegion",`${region}|${(new Date(Date.now()))}`, entryptedRegion);
  // callAPI(`https://api.getsetgo.fitness/base_ind/API/v1/user_packages/${entryptedRegion}`,'get',(data)=>{console.log(data)}, (err)=>{console.log(err)});
  set("products", config[region]);
  set("offer", config["offer"]);
  cb(get("products").currency);
}


function askLocation(err) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setLoc);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}
function setLoc(position) {
  console.log(position);
}
// function encryption(dataToBeEncrypted) {
//     let encrypted_string = '';
//     encrypted_string = ((aes.encrypt(dataToBeEncrypted, secret_key, { iv: secret_iv}).toString()).replace(/\//g, '_')).replace(/\+/g, '-');
//     return encrypted_string;
//   }
function callAPI(url, type, success, error, data) {
  switch (type) {
    case "get":
      Axios.get(url)
        .then((data) => {
          success(data);
        })
        .catch((err) => {
          error(err);
        });
      break;
    case "post":
      Axios.post(url, data)
        .then((data) => {
          success(data);
        })
        .catch((err) => {
          error(err);
        });
      break;
    default:
      return;
  }
}
export {
  docHt,
  s3GlobalPath,
  colors,
  retrievePath,
  callAPI,
  get,
  set,
  getURL,
  updateLoc,
};
