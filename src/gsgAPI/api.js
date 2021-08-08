const callAPI = async (url, method, body) => {
  switch (method) {
    case "GET":
      const res = await fetch(url);
      const data = await res.json();

      if (!data) {
        return "data not found";
      } else {
        return data;
      }
    case "POST":
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
        redirect: "follow",
      };

      var response = fetch(url, requestOptions)
        .then((res) => res.text())
        .then((result) => {
          return result;
        })
        .catch((error) => console.log("error", error));
      return response;

    default:
      break;
  }
};
async function getLocationApi() {
  let data = await fetch("https://ipinfo.io/?token=22065f6a076bdf")
    .then((Response) => Response.json())
    .catch((e) => console.log(e));
  data = await checkRegion(data);
  return data;
}
async function checkRegion(country) {
  let region = "in";

  let AE = ["AE", "OM", "QA", "SA", "BH", "KW", "TR", "SY", "IR", "EG", "IQ", "IL", "YE", "LB", "JO", "PS", "CY", "IR"];
  let IN = ["IN", "NP", "LK", "BT", "MM", "PK", "BD", "AF", "MV"];
  if (AE.indexOf(country.country) >= 0) region = "ae";
  else if (IN.indexOf(country.country) >= 0) region = "in";
  else region = "us";

  return region;
}
async function getBaseUrl() {
  let locData = await getLocationApi();
  if (locData === "in") {
    return "base_ind";
  } else if (locData === "ae") {
    return "base";
  } else {
    return "base_usa";
  }
}

export default {
  getBaseUrl,
  getLocationApi,
  callAPI,
  coachDataURL: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/trainerdetails",
  coachSuggestionApi: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/suggest-coach",
  coachListURL: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/searchtrainers",
  coachTransformationURL: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/get_trainers_transformation",
  coachSuccessStory: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/fetch_transformations",
  userSignUpAPIURL: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/user-signup",
  bookConsultationApi: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/fc_submit",
  topLevelPlans: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/fetch_plans",
  fetchPackagesAPIURL: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/packages",
  planSuggestionApi: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/suggest-plan",
  validate_coupon: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/validate_coupon",
  orderPlacingAPIURL: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/create_neworder",
  orderStatus: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/neworder_status",
  assign_coach: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/assign_users_coach",
  site_seo_meta_data: (slug) => "https://api.getsetgo.fitness/base_ind/API/v1/get-page-seo?slug=" + slug,
  google_reviews_api: "https://api.getsetgo.fitness/base_ind/API/v1/get-google-reviews",
  wp_posts: "https://api.getsetgo.fitness/base_ind/API/v1/blog-posts",
};
