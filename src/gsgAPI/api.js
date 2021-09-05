import { callAPI, getURL } from "../services";

export function api_google_Reviews(successCallback, errCallback) {
  callAPI(
    getURL("get-google-reviews/supermom"),
    "get",
    successCallback,
    errCallback
  );
}
export function api_google_All_Reviews(successCallback, errCallback) {
  callAPI(
    getURL("get-google-reviews/all"),
    "get",
    successCallback,
    errCallback
  );
}

export function api_signUp(successCallback, errCallback) {
  callAPI(
    "https://api.getsetgo.fitness/base_ind/API/v1/get-google-reviews",
    "get",
    successCallback,
    errCallback
  );
}

export function api_set_reminder(data, successCallback, errCallback) {
  console.log(data);
  callAPI(
    "https://api.getsetgo.fitness/cms/communicate/set_reminder",
    "post",
    successCallback,
    errCallback,
    data
  );
  // "mobile_number": data.mobile_number, //"919821354464",
  // "whatsapp_number": data.whatsapp_number,//"919821354464",
  // "preferred_hour": data.preferred_hour,//'10'
  // "preferred_min": data.preferred_min,//"00",
  // "preferred_meridian": data.preferred_meridian,
  // "region": data.region
}
