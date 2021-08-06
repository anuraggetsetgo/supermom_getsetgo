import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Styles from "../app-style.js";
import { Typography } from "@material-ui/core";
import { colors } from "../services";

class Publicreviews extends Component {
  render() {
    return (
      <Grid
        item
        container
        style={{
          ...Styles.highZ,
          ...Styles.spacingVertical,
          ...Styles.whiteBG,
        }}
        direction="column"
        alignItems="center"
        justify="center"
        className="top"
      >
        
        <Grid container direction='column' item xs={10} style={{...Styles.centerTxt}}>
          <Grid item >
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcharan.panjwani.3%2Fposts%2F229774871476080&width=500"
              width="500"
              height="180"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Client weight loss facebook review"
            ></iframe>
          </Grid>
          <Grid item >
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Faashu.luthra/posts/10159555067681995&width=500"
              width="500"
              height="220"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Client weight loss facebook review"
            ></iframe>
          </Grid>
          <Grid item >
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fabhishek.maurya.98/posts/10213407272911439&width=500"
              width="500"
              height="175"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Client weight loss facebook review"
            ></iframe>
          </Grid>
          <Grid item >
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Farchi.anu%2Fposts%2F1828319153947684&width=500"
              width="500"
              height="280"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Client weight loss facebook review"
            ></iframe>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Publicreviews;
