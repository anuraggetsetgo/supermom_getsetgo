import {React,useState} from 'react'
import Slider from "react-slick";
import Styles from '../app-style'
import { Avatar,Grid, makeStyles, Typography, useTheme,useMediaQuery } from "@material-ui/core";

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
export default function Carouseldesktop() {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile2 = useMediaQuery(theme.breakpoints.down("xs"));
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
       {"<"}
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        {"<"}
      </div>
    );
  };
  const settings = {
    
      dots:true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerPadding: "0px",
    beforeChange: (current, next) => setImageIndex(next),
  };

  const [imageIndex, setImageIndex] = useState(0);

    return (
     <Grid  container direction='row' justifyContent='center' >
         <Grid item container  className="slidecont">
            
        {DataItem.map(({ image, text, name, profile }, key) => (
        <Grid container key={key+text} item  className={key === imageIndex ? "slide activeSlide" : "slide"}>
     
        </Grid>

        ))}
        
        </Grid>
    </Grid>)
}


{/* <Grid
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
              {image.map((image) => (
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

    //       </Grid>
    //       <Grid
    //         container
    //         item
    //         xs={12}
    //         sm={7}
    //         lg={5}
    //         md={5}
    //         direction="column"
    //         justify="flex-end"
    //         alignItems='center'
    //         style={{ padding: isMobile2 ? "0 20px 20px 20px" : "20px" }}
    //       >
    //         <Grid item>
    //           <Typography
    //             variant={isMobile ? "h6" : "h5"}
    //             style={{
    //               maxWidth: isMobile ? "300px" : "238px",
    //               ...Styles.colorCharcoalDark,
    //               fontFamily: "Roboto",
    //               // marginTop: isMobile ? "16px" : "0",
    //             }}
    //           >
    //             {text}
    //           </Typography>
    //         </Grid>
            
    //           <AvtarName name={name} profile={profile} />
            
    //       </Grid>
    //     </Grid>
    //   </Grid>
    //      */}