import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Avatar,
  Slide,
  Radio,
  Chip,
  Button
} from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { withStyles } from "@material-ui/core/styles";
import PreloadImage from "./preloadImg";
import Logo from "./logoElement.png";
import Dialog from "./dialog.png";
import Food from "./food.png";
import Heart from "./heart.png";
import Dumbbell from "./dumbbell.png";
import Transformation01 from "./transformations_01.png";
import Transformation02 from "./transformations_02.png";
import WhatsApp from "./whatsapp_logo.png";
import Styles from "./App.styles";
import { colors, set } from "./services";
import Config from "./config";
import diwali from "./diwali.png";
import shimmer from "./shimmer.png";
import faq from "./faq.json";
const content = [
  {
    icon: Dialog,
    title: "Expert coaches who've transformed 20,000+ clients!",
    subtitle:
      "You'll love training under our coaches, who are trained in Sports Nutrition and use only scientific and evidence-based techniques to get you in shape."
  },
  {
    icon: Heart,
    title: "Healthier choices made easy. No, seriously.",
    subtitle:
      "We'll teach you to listen to your body, make mindful, easy-to-stick-to health choices and lead a more healthy lifestyle. "
  },
  {
    icon: Food,
    title: "No crash diets. Only joyful home-cooked meals.",
    subtitle:
      "Say goodbye to crash diets, and say hello to balanced meal plans that aren’t drastically different from your lifestyle."
  },
  {
    icon: Dumbbell,
    title: "Easy-to-follow workouts you'll actually enjoy",
    subtitle:
      "Come, find joy in daily workouts. We teach you the art of being consistent with exercise, instead of chasing lofty goals and unrealistic results."
  }
];
const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiAccordionSummary);
const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails);
function Diwali(props) {
  let [transformation, setTransformation] = useState(1);
  let [coachType, setCoachType] = useState("expert");
  let { region } = props;
  let prices = Config.prices[region];
  let [productCode, setProductCode] = useState(
    prices ? prices.expert.id : null
  );
  let [expanded, setExpanded] = useState("");
  useEffect(() => {
    if (prices) set("package_id", prices.expert.id);
  }, []);
  const handleChange = panel => {
    setExpanded(expanded === panel ? "" : panel);
  };
  const scrollTop = () => {
    window.scrollTo({ top: 130, behavior: "smooth" });
  };
  return (
    <Grid container direction='column' style={{ overflow: "hidden" }}>
      <Grid item style={Styles.marginBottom}>
        <PreloadImage
          src={Logo}
          alt='GetSetGo Fitness Diwali offer'
          style={{ width: "100px", padding: "20px 3% 0" }}
        />
      </Grid>
      <Grid
        item
        container
        justify='space-between'
        alignItems='flex-start'
        style={{ position: "relative", padding: "10px 3% 0", maxWidth: "99%" }}
      >
        <Grid item xs={12} md={7} container direction='column'>
          <Grid
            item
            container
            style={Styles.marginBottom}
            spacing={4}
            alignItems='flex-start'
          >
            <Grid item>
              <Typography variant='h2' style={{ letterSpacing: ".15rem" }}>
                <strong>
                  Get your jaw-dropping fitness transformation
                  <br /> at a 25% discount
                </strong>
              </Typography>
            </Grid>
          </Grid>
          {content.map(data => (
            <Grid
              item
              container
              alignItems='center'
              spacing={4}
              style={Styles.marginBottom}
            >
              <Grid item xs={2}>
                <Avatar
                  src={data.icon}
                  style={{ ...Styles.BGPrimary, ...Styles.largeAvatar }}
                />
              </Grid>
              <Grid item xs={8} container direction='column'>
                <Grid item>
                  <Typography variant='subtitle1'>
                    <strong>{data.title}</strong>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='body1'>{data.subtitle}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={5} container direction='column' spacing={6}>
          {/* {} */}
          {region && (
            <Grid item style={Styles.selectCoach}>
              <Grid item>
                <Typography
                  variant='h2'
                  style={{ ...{ textAlign: "center" }, ...Styles.marginBottom }}
                >
                  Pick a coach for a 3-month program
                </Typography>
              </Grid>
              <Grid
                item
                container
                alignItems='flex-start'
                spacing={2}
                style={Styles.marginBottom}
              >
                <Grid item>
                  <Radio
                    color='primary'
                    checked={coachType === "expert"}
                    onChange={e => {
                      setCoachType(e.target.value);
                      setProductCode(prices["expert"]["id"]);
                      console.log("Package id", prices["expert"]["id"]);
                      set("package_id", prices["expert"]["id"]);
                    }}
                    value='expert'
                    name='expert-coach'
                    inputProps={{ "aria-label": "A" }}
                  />
                </Grid>
                <Grid item container direction='column' xs={10} spacing={2}>
                  <Grid item container spacing={2} alignItems='center'>
                    <Grid item>
                      <Chip label='EXPERT' style={Styles.bigChip} />
                    </Grid>
                    <Grid item>
                      <Typography variant='subtitle1'>
                        <strong>
                          <strike style={{ color: "#830C4F" }}>
                            <span style={{ color: "#000" }}>
                              {prices.currency} {prices.expert.price}
                            </span>
                          </strike>
                        </strong>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant='subtitle1'
                        style={{ color: colors.green }}
                      >
                        <strong>
                          {prices.currency} {prices.expert.discounted}*
                        </strong>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography>
                      Our Expert coaches have helped 500+ clients get into the
                      best shape of their life!
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container alignItems='flex-start' spacing={2}>
                <Grid item>
                  <Radio
                    color='primary'
                    checked={coachType === "elite"}
                    onChange={e => {
                      setCoachType(e.target.value);
                      setProductCode(prices["elite"]["id"]);
                      console.log("Package id", prices["elite"]["id"]);
                      set("package_id", prices["elite"]["id"]);
                    }}
                    value='elite'
                    name='elite-coach'
                    inputProps={{ "aria-label": "A" }}
                  />
                </Grid>
                <Grid item container direction='column' xs={10} spacing={2}>
                  <Grid item container spacing={2} alignItems='center'>
                    <Grid item>
                      <Chip
                        label='ELITE'
                        style={{
                          ...Styles.bigChip,
                          ...{ background: "#E7A729" }
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant='subtitle1'>
                        <strong>
                          <strike style={{ color: "#830C4F" }}>
                            <span style={{ color: "#000" }}>
                              {prices.currency} {prices.elite.price}
                            </span>
                          </strike>
                        </strong>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant='subtitle1'
                        style={{ color: colors.green }}
                      >
                        <strong>
                          {prices.currency} {prices.elite.discounted}*
                        </strong>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography>
                      Our Elite coaches are the finest from the Indian Fitness
                      Industry & have transformed 1500+ clients.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid item style={{ textAlign: "center" }}>
            <Button
              variant='contained'
              color='primary'
              className='bigButton'
              onClick={() => props.history.push("userinfo")}
            >
              <Typography variant='subtitle1'>
                <strong>GET SIGNED UP</strong>
              </Typography>
            </Button>
          </Grid>
          <Grid item style={{ textAlign: "center" }}>
            <Button
              variant='contained'
              color='primary'
              className='bigButton'
              style={{ color: colors.white, transform: "scale(0.9)" }}
              startIcon={<img src={WhatsApp} style={{ width: "50px" }} />}
            >
              <Typography
                variant='subtitle1'
                style={{ lineHeight: "1.2em", fontSize: "1.4rem" }}
              >
                Have questions?
                <br />
                Whatsapp us!
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <div
          style={{
            position: "absolute",
            right: "30px",
            bottom: "20px",
            textAlign: "right"
          }}
        >
          <Typography>
            <em>*Price for 3-month (12 weeks) program</em>
          </Typography>
          <Typography>
            <strong>T & C apply</strong>
          </Typography>
        </div>
      </Grid>
      <Grid
        item
        container
        direction='column'
        style={{
          ...Styles.inclusions,
          ...Styles.marginBottom,
          ...{ position: "relative" }
        }}
      >
        <Grid item>
          <Typography
            variant='h2'
            style={{ ...Styles.marginBottom, ...{ color: colors.secondary } }}
          >
            <strong>What we've got in store for you</strong>
          </Typography>
        </Grid>
        <Grid item container style={{ color: colors.secondary }}>
          <Grid item xs={6}>
            <ul>
              <li>
                <Typography variant='subtitle1'>
                  A fully personalised workout & meal plan
                </Typography>
              </li>
              <li>
                <Typography variant='subtitle1'>
                  Weekly check-ins & calls
                </Typography>
              </li>
              <li>
                <Typography variant='subtitle1'>
                  Unlimited coach support on Whatsapp
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <ul>
              <li>
                <Typography variant='subtitle1'>
                  Detailed fitness progress reports
                </Typography>
              </li>
              <li>
                <Typography variant='subtitle1'>
                  Guidelines to maintain fitness results in the long-term
                </Typography>
              </li>
              <li>
                <Typography variant='subtitle1'>
                  Frequent feedback & reviews
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid item>
          <PreloadImage
            src={shimmer}
            alt='Diwali celebrations'
            style={{
              position: "absolute",
              left: "10px",
              bottom: "10px",
              width: "60px"
            }}
          />
        </Grid>
      </Grid>
      <Grid item style={{ textAlign: "center", ...Styles.marginBottom }}>
        <Button
          variant='contained'
          color='primary'
          className='bigButton'
          onClick={() => scrollTop()}
        >
          <Typography variant='subtitle1'>
            <strong>GET SIGNED UP</strong>
          </Typography>
        </Button>
      </Grid>
      <Grid
        item
        container
        direction='column'
        style={{ padding: "20px 5%", ...Styles.marginBottom }}
        spacing={4}
      >
        <Grid item>
          <Typography variant='h2'>
            Jaw-dropping GetSetGo Fitness client transformations
          </Typography>
          <Typography variant='subtitle1'>
            <em>You could be our next!</em>
          </Typography>
        </Grid>
        <Grid
          item
          container
          alignItems='center'
          style={{ textAlign: "center" }}
        >
          <Grid item xs={1}>
            <span
              className='material-icons'
              style={{
                ...{ color: colors.primary, fontSize: "3rem" },
                ...Styles.cursorPointer
              }}
              onClick={() => {
                setTransformation(transformation === 1 ? 0 : 1);
              }}
            >
              arrow_back_ios
            </span>
          </Grid>
          <Grid item xs={10} style={{ position: "relative" }}>
            {transformation === 1 && (
              <Slide direction='right' in={transformation === 1}>
                <PreloadImage
                  alt='GetSetGo transformation'
                  style={{ width: "100%" }}
                  src={Transformation01}
                />
              </Slide>
            )}
            {transformation === 0 && (
              <Slide direction='left' in={transformation === 0}>
                <PreloadImage
                  alt='GetSetGo transformation'
                  style={{ width: "100%" }}
                  src={Transformation02}
                />
              </Slide>
            )}
          </Grid>
          <Grid item xs={1}>
            <span
              className='material-icons'
              style={{
                ...{ color: colors.primary, fontSize: "3rem" },
                ...Styles.cursorPointer
              }}
              onClick={() => {
                setTransformation(transformation === 1 ? 0 : 1);
              }}
            >
              arrow_forward_ios
            </span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ textAlign: "center", ...Styles.marginBottom }}>
        <Button
          variant='contained'
          color='primary'
          className='bigButton'
          onClick={() => scrollTop()}
        >
          <Typography variant='subtitle1'>
            <strong>GET SIGNED UP</strong>
          </Typography>
        </Button>
      </Grid>
      <Grid
        item
        container
        direction='column'
        style={{ padding: "20px 5%" }}
        spacing={4}
      >
        <Grid item>
          <Typography variant='h2'>Frequently asked questions</Typography>
        </Grid>
        <Grid item>
          {faq.map((q, i) => (
            <Accordion
              expanded={expanded === `panel${i}`}
              onChange={() => handleChange(`panel${i}`)}
            >
              <AccordionSummary
                expandIcon={<span class='material-icons'>expand_more</span>}
                aria-controls={`panel${i}bh-content`}
                id={`panel${i}bh-header`}
              >
                <Typography>{q.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <small>{q.a}</small>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Diwali;
