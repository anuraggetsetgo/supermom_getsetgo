import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { set, get } from "./services";

export default function ScrollToTop(app) {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search); //AVN
  if (
    params.get("campaign_id") != null &&
    params.get("affiliate_id") != null &&
    params.get("affiliate_type") != null
  ) {
    set("campaign_id", params.get("campaign_id"));
    set("affiliate_id", params.get("affiliate_id"));
    set("affiliate_type", params.get("affiliate_type")); //Avn
  }
  console.log("Path name", pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
