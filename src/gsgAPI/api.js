import { get,set,callAPI, getURL} from '../services'

export function api_google_Reviews(successCallback, errCallback) {

  //callAPI(getURL("profile"), "get", successCallback, errCallback);
  callAPI('https://api.getsetgo.fitness/base_ind/API/v1/get-google-reviews', "get", successCallback, errCallback);
}

export function api_signUp(successCallback, errCallback) {

  //callAPI(getURL("profile"), "get", successCallback, errCallback);
  callAPI('https://api.getsetgo.fitness/base_ind/API/v1/get-google-reviews', "get", successCallback, errCallback);
}

// export default {
//   getBaseUrl,
//   getLocationApi,
//   callAPI,
//   coachDataURL: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/trainerdetails",
//   coachSuggestionApi: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/suggest-coach",
//   coachListURL: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/searchtrainers",
//   coachTransformationURL: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/get_trainers_transformation",
//   coachSuccessStory: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/fetch_transformations",
//   userSignUpAPIURL: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/user-signup",
//   bookConsultationApi: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/fc_submit",
//   topLevelPlans: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/fetch_plans",
//   fetchPackagesAPIURL: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/packages",
//   planSuggestionApi: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/suggest-plan",
//   validate_coupon: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/validate_coupon",
//   orderPlacingAPIURL: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/create_neworder",
//   orderStatus: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/neworder_status",
//   assign_coach: (baseRegionUrl) => "https://api.getsetgo.fitness/" + baseRegionUrl + "/API/v1/assign_users_coach",
//   site_seo_meta_data: (slug) => "https://api.getsetgo.fitness/base_ind/API/v1/get-page-seo?slug=" + slug,
//   google_reviews_api: "https://api.getsetgo.fitness/base_ind/API/v1/get-google-reviews",
//   wp_posts: "https://api.getsetgo.fitness/base_ind/API/v1/blog-posts",
// };
