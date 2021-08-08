import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Styles from "../app-style.js";

const DataItem = [
  {
    image: ["ClientTras/client1-1.png", "ClientTras/client1-2.png"],
    name: "Sana Shika",
    profile: "ClientTras/client1-2.png",
    text: "had a great experience with Getsetgo and the feeling was mutual. She did everything she was asked for and hence got exactly the same results she signed up for. ",
  },
];
const cardStyle = {
  width: "770px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  height: "480px",
  padding: "40px",
};

const LogoSvg = () => {
  return (
    <div>
      <svg width="170" height="68" viewBox="0 0 170 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.94013 33.6607C5.24413 33.7087 5.52013 33.8327 5.76813 34.0327C6.02413 34.2327 6.22413 34.4807 6.36813 34.7767C6.52013 35.0727 6.59613 35.3887 6.59613 35.7247C6.59613 36.1487 6.48813 36.5327 6.27213 36.8767C6.05613 37.2127 5.74013 37.4807 5.32413 37.6807C4.91613 37.8727 4.43213 37.9688 3.87213 37.9688H0.752125V29.6047H3.75213C4.32013 29.6047 4.80413 29.7007 5.20413 29.8927C5.60413 30.0767 5.90413 30.3287 6.10413 30.6487C6.30413 30.9687 6.40413 31.3287 6.40413 31.7287C6.40413 32.2247 6.26813 32.6367 5.99612 32.9647C5.73213 33.2847 5.38013 33.5167 4.94013 33.6607ZM1.84413 33.2167H3.68013C4.19213 33.2167 4.58813 33.0967 4.86813 32.8567C5.14813 32.6167 5.28813 32.2847 5.28813 31.8607C5.28813 31.4367 5.14813 31.1047 4.86813 30.8647C4.58813 30.6247 4.18413 30.5047 3.65613 30.5047H1.84413V33.2167ZM3.77613 37.0687C4.32013 37.0687 4.74413 36.9407 5.04813 36.6847C5.35213 36.4287 5.50413 36.0727 5.50413 35.6167C5.50413 35.1527 5.34413 34.7887 5.02413 34.5247C4.70413 34.2527 4.27613 34.1167 3.74013 34.1167H1.84413V37.0687H3.77613ZM14.1115 34.4287C14.1115 34.6367 14.0995 34.8567 14.0755 35.0887H8.8195C8.8595 35.7367 9.0795 36.2447 9.4795 36.6127C9.8875 36.9727 10.3795 37.1527 10.9555 37.1527C11.4275 37.1527 11.8195 37.0447 12.1315 36.8287C12.4515 36.6047 12.6755 36.3087 12.8035 35.9407H13.9795C13.8035 36.5727 13.4515 37.0887 12.9235 37.4887C12.3955 37.8807 11.7395 38.0768 10.9555 38.0768C10.3315 38.0768 9.7715 37.9368 9.2755 37.6567C8.7875 37.3767 8.4035 36.9807 8.1235 36.4688C7.8435 35.9487 7.7035 35.3487 7.7035 34.6687C7.7035 33.9887 7.8395 33.3927 8.1115 32.8807C8.3835 32.3687 8.7635 31.9767 9.2515 31.7047C9.7475 31.4247 10.3155 31.2847 10.9555 31.2847C11.5795 31.2847 12.1315 31.4207 12.6115 31.6927C13.0915 31.9647 13.4595 32.3407 13.7155 32.8207C13.9795 33.2927 14.1115 33.8287 14.1115 34.4287ZM12.9835 34.2007C12.9835 33.7847 12.8915 33.4287 12.7075 33.1327C12.5235 32.8287 12.2715 32.6007 11.9515 32.4487C11.6395 32.2887 11.2915 32.2087 10.9075 32.2087C10.3555 32.2087 9.8835 32.3847 9.4915 32.7367C9.1075 33.0887 8.8875 33.5767 8.8315 34.2007H12.9835ZM18.2289 32.2927H16.8489V37.9688H15.7569V32.2927H14.9049V31.3927H15.7569V30.9247C15.7569 30.1887 15.9449 29.6527 16.3209 29.3167C16.7049 28.9727 17.3169 28.8007 18.1569 28.8007V29.7127C17.6769 29.7127 17.3369 29.8087 17.1369 30.0007C16.9449 30.1847 16.8489 30.4927 16.8489 30.9247V31.3927H18.2289V32.2927ZM22.3701 38.0768C21.7541 38.0768 21.1941 37.9368 20.6901 37.6567C20.1941 37.3767 19.8021 36.9807 19.5141 36.4688C19.2341 35.9487 19.0941 35.3487 19.0941 34.6687C19.0941 33.9967 19.2381 33.4047 19.5261 32.8927C19.8221 32.3727 20.2221 31.9767 20.7261 31.7047C21.2301 31.4247 21.7941 31.2847 22.4181 31.2847C23.0421 31.2847 23.6061 31.4247 24.1101 31.7047C24.6141 31.9767 25.0101 32.3687 25.2981 32.8807C25.5941 33.3927 25.7421 33.9887 25.7421 34.6687C25.7421 35.3487 25.5901 35.9487 25.2861 36.4688C24.9901 36.9807 24.5861 37.3767 24.0741 37.6567C23.5621 37.9368 22.9941 38.0768 22.3701 38.0768ZM22.3701 37.1167C22.7621 37.1167 23.1301 37.0247 23.4741 36.8407C23.8181 36.6567 24.0941 36.3807 24.3021 36.0127C24.5181 35.6447 24.6261 35.1967 24.6261 34.6687C24.6261 34.1407 24.5221 33.6927 24.3141 33.3247C24.1061 32.9567 23.8341 32.6847 23.4981 32.5087C23.1621 32.3247 22.7981 32.2327 22.4061 32.2327C22.0061 32.2327 21.6381 32.3247 21.3021 32.5087C20.9741 32.6847 20.7101 32.9567 20.5101 33.3247C20.3101 33.6927 20.2101 34.1407 20.2101 34.6687C20.2101 35.2047 20.3061 35.6567 20.4981 36.0247C20.6981 36.3927 20.9621 36.6687 21.2901 36.8527C21.6181 37.0287 21.9781 37.1167 22.3701 37.1167ZM28.2699 32.4607C28.4619 32.0847 28.7339 31.7927 29.0859 31.5847C29.4459 31.3767 29.8819 31.2727 30.3939 31.2727V32.4007H30.1059C28.8819 32.4007 28.2699 33.0647 28.2699 34.3927V37.9688H27.1779V31.3927H28.2699V32.4607ZM37.6545 34.4287C37.6545 34.6367 37.6425 34.8567 37.6185 35.0887H32.3625C32.4025 35.7367 32.6225 36.2447 33.0225 36.6127C33.4305 36.9727 33.9225 37.1527 34.4985 37.1527C34.9705 37.1527 35.3625 37.0447 35.6745 36.8287C35.9945 36.6047 36.2185 36.3087 36.3465 35.9407H37.5225C37.3465 36.5727 36.9945 37.0887 36.4665 37.4887C35.9385 37.8807 35.2825 38.0768 34.4985 38.0768C33.8745 38.0768 33.3145 37.9368 32.8185 37.6567C32.3305 37.3767 31.9465 36.9807 31.6665 36.4688C31.3865 35.9487 31.2465 35.3487 31.2465 34.6687C31.2465 33.9887 31.3825 33.3927 31.6545 32.8807C31.9265 32.3687 32.3065 31.9767 32.7945 31.7047C33.2905 31.4247 33.8585 31.2847 34.4985 31.2847C35.1225 31.2847 35.6745 31.4207 36.1545 31.6927C36.6345 31.9647 37.0025 32.3407 37.2585 32.8207C37.5225 33.2927 37.6545 33.8287 37.6545 34.4287ZM36.5265 34.2007C36.5265 33.7847 36.4345 33.4287 36.2505 33.1327C36.0665 32.8287 35.8145 32.6007 35.4945 32.4487C35.1825 32.2887 34.8345 32.2087 34.4505 32.2087C33.8985 32.2087 33.4265 32.3847 33.0345 32.7367C32.6505 33.0887 32.4305 33.5767 32.3745 34.2007H36.5265Z"
          fill="black"
        />
        <path
          d="M147.206 36.1087H143.558L142.886 37.9688H141.734L144.758 29.6527H146.018L149.03 37.9688H147.878L147.206 36.1087ZM146.894 35.2207L145.382 30.9967L143.87 35.2207H146.894ZM153.024 32.2927H151.644V37.9688H150.552V32.2927H149.7V31.3927H150.552V30.9247C150.552 30.1887 150.74 29.6527 151.116 29.3167C151.5 28.9727 152.112 28.8007 152.952 28.8007V29.7127C152.472 29.7127 152.132 29.8087 151.932 30.0007C151.74 30.1847 151.644 30.4927 151.644 30.9247V31.3927H153.024V32.2927ZM155.629 32.2927V36.1687C155.629 36.4887 155.697 36.7167 155.833 36.8527C155.969 36.9807 156.205 37.0447 156.541 37.0447H157.345V37.9688H156.361C155.753 37.9688 155.297 37.8287 154.993 37.5487C154.689 37.2687 154.537 36.8087 154.537 36.1687V32.2927H153.685V31.3927H154.537V29.7367H155.629V31.3927H157.345V32.2927H155.629ZM164.668 34.4287C164.668 34.6367 164.656 34.8567 164.632 35.0887H159.376C159.416 35.7367 159.636 36.2447 160.036 36.6127C160.444 36.9727 160.936 37.1527 161.512 37.1527C161.984 37.1527 162.376 37.0447 162.688 36.8287C163.008 36.6047 163.232 36.3087 163.36 35.9407H164.536C164.36 36.5727 164.008 37.0887 163.48 37.4887C162.952 37.8807 162.296 38.0768 161.512 38.0768C160.888 38.0768 160.328 37.9368 159.832 37.6567C159.344 37.3767 158.96 36.9807 158.68 36.4688C158.4 35.9487 158.26 35.3487 158.26 34.6687C158.26 33.9887 158.396 33.3927 158.668 32.8807C158.94 32.3687 159.32 31.9767 159.808 31.7047C160.304 31.4247 160.872 31.2847 161.512 31.2847C162.136 31.2847 162.688 31.4207 163.168 31.6927C163.648 31.9647 164.016 32.3407 164.272 32.8207C164.536 33.2927 164.668 33.8287 164.668 34.4287ZM163.54 34.2007C163.54 33.7847 163.448 33.4287 163.264 33.1327C163.08 32.8287 162.828 32.6007 162.508 32.4487C162.196 32.2887 161.848 32.2087 161.464 32.2087C160.912 32.2087 160.44 32.3847 160.048 32.7367C159.664 33.0887 159.444 33.5767 159.388 34.2007H163.54ZM167.202 32.4607C167.394 32.0847 167.666 31.7927 168.018 31.5847C168.378 31.3767 168.814 31.2727 169.326 31.2727V32.4007H169.038C167.814 32.4007 167.202 33.0647 167.202 34.3927V37.9688H166.11V31.3927H167.202V32.4607Z"
          fill="black"
        />
        <path
          d="M87.3326 67.2784C105.711 67.2784 120.61 52.3794 120.61 34.0005C120.61 15.6217 105.711 0.722656 87.3326 0.722656C68.9537 0.722656 54.0547 15.6217 54.0547 34.0005C54.0547 52.3794 68.9537 67.2784 87.3326 67.2784Z"
          fill="white"
        />
        <path
          d="M99.0569 41.5998H89.5953C87.5795 41.5998 85.6462 40.799 84.2208 39.3736C82.7954 37.9482 81.9946 36.0149 81.9946 33.9991C81.9946 31.9833 82.7954 30.05 84.2208 28.6246C85.6462 27.1992 87.5795 26.3984 89.5953 26.3984H99.0462C101.062 26.3984 102.995 27.1992 104.421 28.6246C105.846 30.05 106.647 31.9833 106.647 33.9991C106.647 36.0149 105.846 37.9482 104.421 39.3736C102.995 40.799 101.062 41.5998 99.0462 41.5998H99.0569ZM89.6059 29.9924C88.5433 29.9924 87.5242 30.4146 86.7728 31.166C86.0214 31.9174 85.5993 32.9365 85.5993 33.9991C85.5993 35.0617 86.0214 36.0808 86.7728 36.8322C87.5242 37.5836 88.5433 38.0058 89.6059 38.0058H99.0569C100.119 38.0058 101.139 37.5836 101.89 36.8322C102.641 36.0808 103.064 35.0617 103.064 33.9991C103.064 32.9365 102.641 31.9174 101.89 31.166C101.139 30.4146 100.119 29.9924 99.0569 29.9924H89.6059Z"
          fill="#4595A4"
        />
        <path
          d="M99.0572 35.8787H89.5956C89.0978 35.8787 88.6205 35.681 88.2685 35.329C87.9165 34.977 87.7188 34.4996 87.7188 34.0019C87.7188 33.5041 87.9165 33.0267 88.2685 32.6747C88.6205 32.3227 89.0978 32.125 89.5956 32.125H99.0465C99.5443 32.125 100.022 32.3227 100.374 32.6747C100.726 33.0267 100.923 33.5041 100.923 34.0019C100.923 34.4996 100.726 34.977 100.374 35.329C100.022 35.681 99.5443 35.8787 99.0465 35.8787H99.0572Z"
          fill="#4595A4"
        />
        <path
          d="M80.0113 33.9991C80.0118 33.4349 80.0689 32.8721 80.1817 32.3192H74.6775V35.9132H77.7551V38.0058H75.608C74.5454 38.0058 73.5262 37.5836 72.7749 36.8322C72.0235 36.0808 71.6013 35.0617 71.6013 33.9991C71.6013 32.9365 72.0235 31.9174 72.7749 31.166C73.5262 30.4146 74.5454 29.9924 75.608 29.9924H81.0216C81.8306 28.4998 83.0325 27.257 84.4972 26.3984H75.608C73.5922 26.3984 71.6589 27.1992 70.2335 28.6246C68.8081 30.05 68.0073 31.9833 68.0073 33.9991C68.0073 36.0149 68.8081 37.9482 70.2335 39.3736C71.6589 40.799 73.5922 41.5998 75.608 41.5998H84.4972C81.803 40.0024 80.0113 37.1938 80.0113 33.9991Z"
          fill="#4595A4"
        />
      </svg>
    </div>
  );
};
const AvtarName = ({ name, profile }) => {
  return (
    <Grid container item direction="row" justify="flex-start" style={{ marginTop: "32px" }}>
      <Grid item container xs={3}>
        <Grid item style={{ width: "50px", height: "50px", borderRadius: "50%", backgroundImage: `url(${Styles.backCoverImg(profile)})` }}></Grid>
      </Grid>
      <Grid container xs={6} item direction="column">
        {name.split(" ").map((name) => (
          <Grid item>
            <Typography variant="h4" style={{ maxWidht: "238px" }}>
              {name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
const CarouselContainer = ({ imagePath, text, name, profile }) => {
  return (
    <>
      <Grid item container direction="row" justify="space-between" alignItems="center" style={{ ...cardStyle }}>
        <Grid container item xs={6} direction="row" justify="center" style={{ position: "relative", borderRadius: "25% 0", overflow: "hidden" }}>
          <Grid container item xs={12}>
            {imagePath.map((image) => (
              <Grid item xs={6} style={{ backgroundRepeat: "no-repeat", height: "360px", width: "100%", backgroundImage: `url(${Styles.backCoverImg(image)})` }}></Grid>
            ))}
          </Grid>
          <Grid item style={{ position: "absolute", top: "150px" }}>
            <LogoSvg />
          </Grid>
        </Grid>

        <Grid container item xs={5} direction="column" justify="center">
          <Grid item>
            <Typography variant="h5" style={{ maxWidth: "238px" }}>
              {text}
            </Typography>
          </Grid>
          <AvtarName name={name} profile={profile} />
        </Grid>
      </Grid>
    </>
  );
};

const Carousel = () => {
  return (
    <>
      <Grid item container xs={12} justify="center">
        {" "}
        <Grid item container direction="row" justify="center" style={{ maxWidth: "1360px" }}>
          {DataItem.map(({ image, text, name, profile }) => (
            <CarouselContainer profile={profile} name={name} imagePath={image} text={text} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default Carousel;
