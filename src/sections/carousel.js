import React from "react";
import { Typography, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import Styles from "../app-style.js";
import Carousel from "react-material-ui-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper/core";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const DataItem = [
  {
    image: ["ClientTras/Nima.png"],
    name: "Nima",
    profile: "ClientTras/Nima.jpeg",
    text: "Nima lost 20 kilos and now with her whole new energy levels, she keeps up with her super-active baby girl",
  },
  {
    image: ["ClientTras/Manisha.png"],
    name: "Manisha Nambiar",
    profile: "ClientTras/Manisha.jpeg",
    text: "Manisha lost 15 kilos post-pregnancy weight in 12 weeks and now loves eating a balanced diet.",
  },
  {
    image: ["ClientTras/Richa.png"],
    name: "Richa",
    profile: "ClientTras/Richa.jpeg",
    text: "From 90kgs to 68kgs, Richa overcame her post-delivery knee and back pain. She now manages her 2 kids and family with ease.",
  },
  {
    image: ["ClientTras/Simran.png"],
    name: "Simran",
    profile: "ClientTras/Simran.jpeg",
    text: "Simran shed over 10 kilos, learned in-depth about nutrition and now coaches other women to live a healthy life.",
  },
  {
    image: ["ClientTras/Somya.png"],
    name: "Somya",
    profile: "ClientTras/Somya.jpeg",
    text: "Somya was looking to get back to how she looked before her pregnancy. Losing over 10 kilos made it happen for her.",
  },
];
const cardStyle = {
  width: "48vw",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  // height: "480px",
  padding: "40px",
};

const cardStyleMobile = {
  width: "760px",
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  // height: "480px",
  padding: "40px",
};
const LogoSvg = () => {
  return (
    <div>
      <svg
        width="207"
        height="320"
        viewBox="0 0 207 364"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="100.005"
          y="0.96875"
          width="5.32446"
          height="362.063"
          fill="white"
        />
        <path
          d="M0.171631 181.668C0.171631 173.03 7.17416 166.027 15.8122 166.027H83.3663V197.309H15.8122C7.17417 197.309 0.171631 190.306 0.171631 181.668Z"
          fill="white"
        />
        <path
          d="M123.3 166.027H190.854C199.492 166.027 206.494 173.03 206.494 181.668C206.494 190.306 199.492 197.309 190.854 197.309H123.3V166.027Z"
          fill="white"
        />
        <path
          d="M20.9401 181.692C21.2441 181.74 21.5201 181.864 21.7681 182.064C22.0241 182.264 22.2241 182.512 22.3681 182.808C22.5201 183.104 22.5961 183.42 22.5961 183.756C22.5961 184.18 22.4881 184.564 22.2721 184.908C22.0561 185.244 21.7401 185.512 21.3241 185.712C20.9161 185.904 20.4321 186 19.8721 186H16.7521V177.636H19.7521C20.3201 177.636 20.8041 177.732 21.2041 177.924C21.6041 178.108 21.9041 178.36 22.1041 178.68C22.3041 179 22.4041 179.36 22.4041 179.76C22.4041 180.256 22.2681 180.668 21.9961 180.996C21.7321 181.316 21.3801 181.548 20.9401 181.692ZM17.8441 181.248H19.6801C20.1921 181.248 20.5881 181.128 20.8681 180.888C21.1481 180.648 21.2881 180.316 21.2881 179.892C21.2881 179.468 21.1481 179.136 20.8681 178.896C20.5881 178.656 20.1841 178.536 19.6561 178.536H17.8441V181.248ZM19.7761 185.1C20.3201 185.1 20.7441 184.972 21.0481 184.716C21.3521 184.46 21.5041 184.104 21.5041 183.648C21.5041 183.184 21.3441 182.82 21.0241 182.556C20.7041 182.284 20.2761 182.148 19.7401 182.148H17.8441V185.1H19.7761ZM30.1115 182.46C30.1115 182.668 30.0995 182.888 30.0755 183.12H24.8195C24.8595 183.768 25.0795 184.276 25.4795 184.644C25.8875 185.004 26.3795 185.184 26.9555 185.184C27.4275 185.184 27.8195 185.076 28.1315 184.86C28.4515 184.636 28.6755 184.34 28.8035 183.972H29.9795C29.8035 184.604 29.4515 185.12 28.9235 185.52C28.3955 185.912 27.7395 186.108 26.9555 186.108C26.3315 186.108 25.7715 185.968 25.2755 185.688C24.7875 185.408 24.4035 185.012 24.1235 184.5C23.8435 183.98 23.7035 183.38 23.7035 182.7C23.7035 182.02 23.8395 181.424 24.1115 180.912C24.3835 180.4 24.7635 180.008 25.2515 179.736C25.7475 179.456 26.3155 179.316 26.9555 179.316C27.5795 179.316 28.1315 179.452 28.6115 179.724C29.0915 179.996 29.4595 180.372 29.7155 180.852C29.9795 181.324 30.1115 181.86 30.1115 182.46ZM28.9835 182.232C28.9835 181.816 28.8915 181.46 28.7075 181.164C28.5235 180.86 28.2715 180.632 27.9515 180.48C27.6395 180.32 27.2915 180.24 26.9075 180.24C26.3555 180.24 25.8835 180.416 25.4915 180.768C25.1075 181.12 24.8875 181.608 24.8315 182.232H28.9835ZM34.2289 180.324H32.8489V186H31.7569V180.324H30.9049V179.424H31.7569V178.956C31.7569 178.22 31.9449 177.684 32.3209 177.348C32.7049 177.004 33.3169 176.832 34.1569 176.832V177.744C33.6769 177.744 33.3369 177.84 33.1369 178.032C32.9449 178.216 32.8489 178.524 32.8489 178.956V179.424H34.2289V180.324ZM38.3701 186.108C37.7541 186.108 37.1941 185.968 36.6901 185.688C36.1941 185.408 35.8021 185.012 35.5141 184.5C35.2341 183.98 35.0941 183.38 35.0941 182.7C35.0941 182.028 35.2381 181.436 35.5261 180.924C35.8221 180.404 36.2221 180.008 36.7261 179.736C37.2301 179.456 37.7941 179.316 38.4181 179.316C39.0421 179.316 39.6061 179.456 40.1101 179.736C40.6141 180.008 41.0101 180.4 41.2981 180.912C41.5941 181.424 41.7421 182.02 41.7421 182.7C41.7421 183.38 41.5901 183.98 41.2861 184.5C40.9901 185.012 40.5861 185.408 40.0741 185.688C39.5621 185.968 38.9941 186.108 38.3701 186.108ZM38.3701 185.148C38.7621 185.148 39.1301 185.056 39.4741 184.872C39.8181 184.688 40.0941 184.412 40.3021 184.044C40.5181 183.676 40.6261 183.228 40.6261 182.7C40.6261 182.172 40.5221 181.724 40.3141 181.356C40.1061 180.988 39.8341 180.716 39.4981 180.54C39.1621 180.356 38.7981 180.264 38.4061 180.264C38.0061 180.264 37.6381 180.356 37.3021 180.54C36.9741 180.716 36.7101 180.988 36.5101 181.356C36.3101 181.724 36.2101 182.172 36.2101 182.7C36.2101 183.236 36.3061 183.688 36.4981 184.056C36.6981 184.424 36.9621 184.7 37.2901 184.884C37.6181 185.06 37.9781 185.148 38.3701 185.148ZM44.2699 180.492C44.4619 180.116 44.7339 179.824 45.0859 179.616C45.4459 179.408 45.8819 179.304 46.3939 179.304V180.432H46.1059C44.8819 180.432 44.2699 181.096 44.2699 182.424V186H43.1779V179.424H44.2699V180.492ZM53.6545 182.46C53.6545 182.668 53.6425 182.888 53.6185 183.12H48.3625C48.4025 183.768 48.6225 184.276 49.0225 184.644C49.4305 185.004 49.9225 185.184 50.4985 185.184C50.9705 185.184 51.3625 185.076 51.6745 184.86C51.9945 184.636 52.2185 184.34 52.3465 183.972H53.5225C53.3465 184.604 52.9945 185.12 52.4665 185.52C51.9385 185.912 51.2825 186.108 50.4985 186.108C49.8745 186.108 49.3145 185.968 48.8185 185.688C48.3305 185.408 47.9465 185.012 47.6665 184.5C47.3865 183.98 47.2465 183.38 47.2465 182.7C47.2465 182.02 47.3825 181.424 47.6545 180.912C47.9265 180.4 48.3065 180.008 48.7945 179.736C49.2905 179.456 49.8585 179.316 50.4985 179.316C51.1225 179.316 51.6745 179.452 52.1545 179.724C52.6345 179.996 53.0025 180.372 53.2585 180.852C53.5225 181.324 53.6545 181.86 53.6545 182.46ZM52.5265 182.232C52.5265 181.816 52.4345 181.46 52.2505 181.164C52.0665 180.86 51.8145 180.632 51.4945 180.48C51.1825 180.32 50.8345 180.24 50.4505 180.24C49.8985 180.24 49.4265 180.416 49.0345 180.768C48.6505 181.12 48.4305 181.608 48.3745 182.232H52.5265Z"
          fill="black"
        />
        <path
          d="M163.206 184.14H159.558L158.886 186H157.734L160.758 177.684H162.018L165.03 186H163.878L163.206 184.14ZM162.894 183.252L161.382 179.028L159.87 183.252H162.894ZM169.024 180.324H167.644V186H166.552V180.324H165.7V179.424H166.552V178.956C166.552 178.22 166.74 177.684 167.116 177.348C167.5 177.004 168.112 176.832 168.952 176.832V177.744C168.472 177.744 168.132 177.84 167.932 178.032C167.74 178.216 167.644 178.524 167.644 178.956V179.424H169.024V180.324ZM171.629 180.324V184.2C171.629 184.52 171.697 184.748 171.833 184.884C171.969 185.012 172.205 185.076 172.541 185.076H173.345V186H172.361C171.753 186 171.297 185.86 170.993 185.58C170.689 185.3 170.537 184.84 170.537 184.2V180.324H169.685V179.424H170.537V177.768H171.629V179.424H173.345V180.324H171.629ZM180.668 182.46C180.668 182.668 180.656 182.888 180.632 183.12H175.376C175.416 183.768 175.636 184.276 176.036 184.644C176.444 185.004 176.936 185.184 177.512 185.184C177.984 185.184 178.376 185.076 178.688 184.86C179.008 184.636 179.232 184.34 179.36 183.972H180.536C180.36 184.604 180.008 185.12 179.48 185.52C178.952 185.912 178.296 186.108 177.512 186.108C176.888 186.108 176.328 185.968 175.832 185.688C175.344 185.408 174.96 185.012 174.68 184.5C174.4 183.98 174.26 183.38 174.26 182.7C174.26 182.02 174.396 181.424 174.668 180.912C174.94 180.4 175.32 180.008 175.808 179.736C176.304 179.456 176.872 179.316 177.512 179.316C178.136 179.316 178.688 179.452 179.168 179.724C179.648 179.996 180.016 180.372 180.272 180.852C180.536 181.324 180.668 181.86 180.668 182.46ZM179.54 182.232C179.54 181.816 179.448 181.46 179.264 181.164C179.08 180.86 178.828 180.632 178.508 180.48C178.196 180.32 177.848 180.24 177.464 180.24C176.912 180.24 176.44 180.416 176.048 180.768C175.664 181.12 175.444 181.608 175.388 182.232H179.54ZM183.202 180.492C183.394 180.116 183.666 179.824 184.018 179.616C184.378 179.408 184.814 179.304 185.326 179.304V180.432H185.038C183.814 180.432 183.202 181.096 183.202 182.424V186H182.11V179.424H183.202V180.492Z"
          fill="black"
        />
        <g filter="url(#filter0_d)">
          <g clipPath="url(#clip0)">
            <path
              d="M103.333 215.278C121.712 215.278 136.611 200.379 136.611 182.001C136.611 163.622 121.712 148.723 103.333 148.723C84.9539 148.723 70.0549 163.622 70.0549 182.001C70.0549 200.379 84.9539 215.278 103.333 215.278Z"
              fill="white"
            />
            <path
              d="M115.057 189.6H105.596C103.58 189.6 101.647 188.799 100.221 187.374C98.7959 185.948 97.9951 184.015 97.9951 181.999C97.9951 179.983 98.7959 178.05 100.221 176.625C101.647 175.199 103.58 174.398 105.596 174.398H115.047C117.063 174.398 118.996 175.199 120.421 176.625C121.847 178.05 122.647 179.983 122.647 181.999C122.647 184.015 121.847 185.948 120.421 187.374C118.996 188.799 117.063 189.6 115.047 189.6H115.057ZM105.606 177.992C104.544 177.992 103.525 178.415 102.773 179.166C102.022 179.917 101.6 180.936 101.6 181.999C101.6 183.062 102.022 184.081 102.773 184.832C103.525 185.584 104.544 186.006 105.606 186.006H115.057C116.12 186.006 117.139 185.584 117.89 184.832C118.642 184.081 119.064 183.062 119.064 181.999C119.064 180.936 118.642 179.917 117.89 179.166C117.139 178.415 116.12 177.992 115.057 177.992H105.606Z"
              fill="#4595A4"
            />
            <path
              d="M115.057 183.879H105.596C105.098 183.879 104.62 183.681 104.268 183.329C103.916 182.977 103.719 182.5 103.719 182.002C103.719 181.504 103.916 181.027 104.268 180.675C104.62 180.323 105.098 180.125 105.596 180.125H115.047C115.544 180.125 116.022 180.323 116.374 180.675C116.726 181.027 116.923 181.504 116.923 182.002C116.923 182.5 116.726 182.977 116.374 183.329C116.022 183.681 115.544 183.879 115.047 183.879H115.057Z"
              fill="#4595A4"
            />
            <path
              d="M96.0116 181.999C96.0121 181.435 96.0691 180.872 96.1819 180.319H90.6778V183.913H93.7553V186.006H91.6082C90.5456 186.006 89.5265 185.584 88.7751 184.832C88.0237 184.081 87.6016 183.062 87.6016 181.999C87.6016 180.936 88.0237 179.917 88.7751 179.166C89.5265 178.415 90.5456 177.992 91.6082 177.992H97.0219C97.8308 176.5 99.0327 175.257 100.497 174.398H91.6082C89.5924 174.398 87.6592 175.199 86.2338 176.625C84.8084 178.05 84.0076 179.983 84.0076 181.999C84.0076 184.015 84.8084 185.948 86.2338 187.374C87.6592 188.799 89.5924 189.6 91.6082 189.6H100.497C97.8032 188.002 96.0116 185.194 96.0116 181.999Z"
              fill="#4595A4"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="54.0816"
            y="140.736"
            width="98.5024"
            height="98.5024"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="7.98668" />
            <feGaussianBlur stdDeviation="7.98668" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <clipPath id="clip0">
            <rect
              x="70.0549"
              y="148.723"
              width="66.5557"
              height="66.5557"
              rx="33.2779"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
const AvtarName = ({ name, profile }, key) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      key={key}
      container
      item
      direction="row"
      justify={isMobile? "flex-start":'center'}
      alignItems='center'
      style={{ marginTop: "16px" }}
    >
      <Grid item container alignItems='center' justify={isMobile? "flex-start":'flex-end'} xs={3} sm={3} lg={3} md={5}>
        <Grid
          item
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundImage: `url(${Styles.backCoverImg(profile)})`,
            backgroundSize: "100% 100%",
            marginRight:isMobile?"0px":'10px,'
          }}
        ></Grid>
      </Grid>
      <Grid
        container
        xs={6}
        item
        direction="column"
        style={{ marginTop: "5px" }}
      >
        {name.split(" ").map((name, key) => (
          <Grid key={key + name} item>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              style={{
                maxWidth: "238px",
                ...Styles.colorReef,
                ...Styles.boldTxt,
                paddingLeft:'16px'
              }}
            >
              {name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
const CarouselContainer = ({ imagePath, text, name, profile }, key) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile2 = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      <Grid
        key={key + name}
        item
        container
        justify="center"
        alignItems="center"
        style={{ width: isMobile ? "80vw" : "51.5vw" }}
      >
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{
            ...(isMobile ? cardStyleMobile : cardStyle),
            padding: isMobile ? "20px 16px 20px 16px" : "10px",
          }}
        >
          <Grid
            container
            item
            lg={7}
            sm={5}
            xs={12}
            md={7}
            direction="row"
            justify="center"
            style={{
              position: "relative",
              //borderRadius: "15% 15%",
              overflow: "hidden",
              padding: "20px 0px 20px 0px",
            }}
          >
            <Grid container item xs={12} sm={12} lg={12} md={12}>
              {imagePath.map((image) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  lg={12}
                  md={12}
                  style={{
                    backgroundRepeat: "no-repeat",
                    height: isMobile ? "280px" : "45vh",//'360px',
                    width: isMobile ? "100%" : "53vw",//400px",
                    backgroundImage: `url(${Styles.backCoverImg(image)})`,
                    backgroundSize: "100% 100%",
                    borderRadius: '30px'
                  }}
                ></Grid>
              ))}
            </Grid>
            {/* <Grid item style={{ position: "absolute" }}>
              <LogoSvg />
            </Grid> */}
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={7}
            lg={5}
            md={5}
            direction="column"
            justify="flex-end"
            alignItems='center'
            style={{ padding: isMobile2 ? "0 20px 20px 20px" : "20px" }}
          >
            <Grid item>
              <Typography
                variant={isMobile ? "h6" : "h5"}
                style={{
                  maxWidth: isMobile ? "300px" : "238px",
                  ...Styles.colorCharcoalDark,
                  fontFamily: "Roboto",
                  // marginTop: isMobile ? "16px" : "0",
                }}
              >
                {text}
              </Typography>
            </Grid>
            
              <AvtarName name={name} profile={profile} />
            
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
const CarouselItem = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile2 = useMediaQuery(theme.breakpoints.down("xs"));
  const isMobile3 = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid item container alignItems="center" justify="center">
        <Grid
          item
          xs={12}
          sm={10}
          lg={10}
          container
          justify="flex-start"
          alignItems="center"
          style={
            isMobile
              ? { padding: "8px 20px 8px 20px" }
              : { marginBottom: "10px", padding: isMobile ? "20px" : "0" }
          }
        >
          <Grid
            item
            container
            alignItems="center"
            justify={isMobile ? "flex-start" : "center"}
            style={isMobile ? null : { margin: "0 0 0 10px" }}
          >
            <Typography
              variant={isMobile ? "h3" : "h1"}
              style={{ ...Styles.colorRed }}
            >
              <span style={{ ...Styles.boldTxt }}>Meet</span> the{" "}
              <span style={{ ...Styles.boldTxt }}>super moms</span> who took
              <br /> charge of their health..
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          lg={10}
          md={10}
          container
          direction="row"
          justify="center"
          style={{ height: isMobile ? "" : "58vh" }}
        // style={{ maxWidth: "1360px" }}
        >
          {isMobile ? (
            <Carousel
              interval={2500}
              animation="slide"
              indicatorIconButtonProps={{
                style: {
                  color: "#C2DCE2",
                  marginRight: "10px",
                },
              }}
              activeIndicatorIconButtonProps={{
                style: {
                  ...Styles.colorPrimary,
                },
              }}
              indicatorContainerProps={{
                style: {
                  marginTop: "30px",
                },
              }}
            >
              {DataItem.map(({ image, text, name, profile }, key) => (
                <CarouselContainer
                  key={key + text + name}
                  profile={profile}
                  name={name}
                  imagePath={image}
                  text={text}
                />
              ))}
            </Carousel>
          ) : isMobile3 ? (
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={false}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 50,
                modifier: 0,
                slideShadows: true,
              }}
              slidesPerView={1.5}
              loop={true}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
              pagination={true}
            >
              {DataItem.map(({ image, text, name, profile }, key) => (
                <Grid key={key + name}>
                  <SwiperSlide>
                    <CarouselContainer
                      profile={profile}
                      name={name}
                      imagePath={image}
                      text={text}
                    />
                  </SwiperSlide>
                </Grid>
              ))}
            </Swiper>
          ) : (
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={false}
              slidesPerView={"auto"}
              autoHeight={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 30,
                modifier: 0,
                slideShadows: true,
              }}
              slidesPerView={1.5}
              loop={true}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
              pagination={{
                clickable: true
              }}
              style={{
                padding: "10px",
              }}
            >
              {DataItem.map(({ image, text, name, profile }, key) => (
                <Grid key={key + name}>
                  <SwiperSlide style={{ width: isMobile ? "" : "45vw" }}>
                    <CarouselContainer
                      profile={profile}
                      name={name}
                      imagePath={image}
                      text={text}
                    />
                  </SwiperSlide>
                </Grid>
              ))}
            </Swiper>
          )}
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          // style={{paddingTop:isMobile? '0px':'30px' }}
          onClick={props.scrollToSignUp}
        >
          <button
            style={{
              ...Styles.landingButton,
              marginTop: isMobile ? "20px" : "",
              ...Styles.colorReef,
              width: `${isMobile ? "90%" : "273px"}`,
            }}
          >
            <span
              style={isMobile ? { fontSize: "20px" } : { fontSize: "24px" }}
            >
              GET STARTED!
            </span>
          </button>
        </Grid>
      </Grid>
    </>
  );
};
export default CarouselItem;
