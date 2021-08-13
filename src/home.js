import React, { useRef } from "react";
import { api_google_Reviews, api_google_All_Reviews } from "./gsgAPI/api";
import Carousel from "./sections/carousel";
import Signupbanner from "./sections/signupbanner";
//import Videocomponent from "./sections/videocomponent";
import Landingvideobanner from "./sections/landingvideobanner";
import Joinnow from "./sections/joinnow";
import Whygetsetgo from "./sections/whygetsetgo";
import Mediabanner from "./sections/mediabanner";
import Publicreviews from "./sections/publicreviews";
import NewsBanner from "./sections/news";
export default function Home(props) {
  const signUpRef = props.signUpRef;
  const [reviewData, setReviewdata] = React.useState([]);
  const [allreviewData, setAllReviewdata] = React.useState([]);
  const getReview = () => {
    api_google_Reviews(
      (data) => {
        console.log(data);
        setReviewdata(data.data.reviews);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  // const scrollToSignUp=()=>{
  //   signUpRef.current.scrollIntoView({ behavior: 'smooth' })
  // }
  React.useEffect(() => {
    getReview();
  }, []);
  const getAllReview = () => {
    api_google_All_Reviews(
      (data) => {
        console.log(data);
        setAllReviewdata(data.data.reviews);
      },
      (err) => {
        console.log(err);
      }
    );
  };
  // const scrollToSignUp=()=>{
  //   signUpRef.current.scrollIntoView({ behavior: 'smooth' })
  // }
  React.useEffect(() => {
    getAllReview();
  }, []);

  return (
    <>
      <Carousel scrollToSignUp={props.scrollToSignUp} />
      <Signupbanner ref={signUpRef} />
      {/* <Signupform /> */}
      {/* <Socialmedia /> */}
      <Landingvideobanner />
      <Joinnow scrollToSignUp={props.scrollToSignUp} />
      <Whygetsetgo />
      <Publicreviews reviewData={reviewData} allreviewData={allreviewData} />
      <Mediabanner />
      <NewsBanner scrollToSignUp={props.scrollToSignUp} />
    </>
  );
}

// import React, { Component } from "react";
// import "./App.css";
// import GetStarted from "./sections/getstarted";
// // import Feelgood from "./sections//feelgood";
// import Feelgood2 from "./sections/Feelgood2";
// import Banner from "./sections/banner";
// import Yoga from "./sections/yoga";
// import Yogabanner from "./sections/yogabanner";
// import Homeworkoutbanner from "./sections/homeworkoutbanner";
// import Homeworkout from "./sections/homeworkout";
// import Diet from "./sections/diet";
// import Homefood from "./sections/homefood";
// import Coachingplan from "./sections/coachingplan";
// import Fun from "./sections/fun";
// import { docHt, set } from "./services";
// import Styles from "./app-style";
// import Transformations from "./sections/transformations";
// import Publicreviews from "./sections/publicreviews";

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       section02: false,
//       section03: false,
//       videoPlaying: false,
//       coachingDetails: false,
//       currentScroll: null,
//     };
//   }

//   handleScroll(e) {
//     let scrollTop = window.scrollY;
//     let { section02, section03 } = this.state;
//     if (scrollTop >= docHt()) {
//       if (!section02) this.setState({ section02: true });
//     } else if (section02) {
//       this.setState({ section02: false });
//     }
//     if (scrollTop >= 3 * docHt()) {
//       if (!section03) this.setState({ section03: true });
//     } else if (section03) {
//       this.setState({ section03: false });
//     }
//   }
//   componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll.bind(this));
//   }
//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.handleScroll.bind(this));
//   }
//   showDetails = () => {
//     this.setState({ currentScroll: window.scrollY });
//     this.setState({ coachingDetails: true });
//     this.props.freezeScroll(true);
//   };
//   hideDetails = () => {
//     let { currentScroll } = this.state;
//     this.props.freezeScroll(false);
//     this.setState({ coachingDetails: false }, () => {
//       document.documentElement.scrollTop = currentScroll;
//       document.body.scrollTop = currentScroll;
//     });
//   };
//   render() {
//     const { section02, section03, coachingDetails } = this.state;
//     return (
//       <React.Fragment>
//         <Banner />
//         {/* <Feelgood2 /> */}
//         {/* <Yogabanner section02={section02} /> */}
//         <Yoga section02={section02}/>
//         {/* <Homeworkoutbanner section03={section03}/> */}
//         <Homeworkout section03={section03}/>
//         {/* <Diet showDetails={this.showDetails} /> */}
//         {/* <Homefood /> */}
//         {/* <Fun /> */}
//         <Transformations />
//         <Publicreviews />
//         <GetStarted />
//         <Coachingplan
//           coachingDetails={coachingDetails}
//           hideDetails={this.hideDetails}
//         />
//       </React.Fragment>
//     );
//   }
// }
// export default Home;
