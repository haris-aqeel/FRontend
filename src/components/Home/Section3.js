import React from "react";
import GridComponent from "../../utilities/GridComponent";
import { makeStyles } from "@material-ui/core/styles";
import peopleLogo from "../../assets/images/people.png";
import UnFilledButton from "../../utilities/UnFilledButton";

const useStyles = makeStyles((theme) => ({
  header1: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    color: "#2B2B2B",
    margin: "5px 0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      textAlign: "left",
    },
  },
  header: {
    backgroundImage: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    color: "#2B2B2B",
    margin: "5px 0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      textAlign: "left",
    },
  },

  highlight: {
    backgroundImage: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    backgroundClip: "text",
    textFillColor: "white",
  },
  para: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "26px",
    color: "#666666",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
      color: "#666666",
      fontSize: "20px",
      lineHeight: "145%",
    },
  },
  image: {
    width: "80%",
    textAlign: "center",
    height: "auto",
    filter: "drop-shadow(10px 24px 74px rgba(76, 115, 255, 0.15))",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  removeSmall: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  displaySmall: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
  },
}));

const ChildComponentA = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <p className={classes.header1}>FOLLOW THE </p>
      <p className={classes.header1}>TESTED AND TRUSTED LEADERS </p>
      <p className={classes.header}>AND STRESS NO MORE</p>
      <div className={classes.removeSmall}>
        <p className={classes.para}>
          We understand that most of people have next to no time to read
          news/articles to aid their course. GoStarPro will take the stress off
          you with our expert traders and market analysts who do all the
          researches and technical analysis. They come up with sure and on-time
          signals and trading strategies that will make you master ctrading in
          no time.
        </p>
        <UnFilledButton
          buttonText={"Join our network now and be wowed."}
          buttonFn={() => {
            console.log("done");
          }}
        />
      </div>
    </React.Fragment>
  );
};

const ChildComponentB = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <img src={peopleLogo} alt="people" className={classes.image} />
      <div className={classes.displaySmall}>
        <p className={classes.para}>
          We understand that most of people have next to no time to read
          news/articles to aid their course. GoStarPro will take the stress off
          you with our expert traders and market analysts who do all the
          researches and technical analysis. They come up with sure and on-time
          signals and trading strategies that will make you master ctrading in
          no time.
        </p>
        <div style={{ textAlign: "center" }}>
          <UnFilledButton
            buttonText={"Join our network now and be wowed."}
            buttonFn={() => {
              console.log("done");
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

const Top = () => (
  <GridComponent
    childComponentA={<ChildComponentA />}
    childComponentB={<ChildComponentB />}
  />
);

export default Top;
