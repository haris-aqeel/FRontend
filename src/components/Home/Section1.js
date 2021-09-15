import React from "react";
import GridComponent from "../../utilities/GridComponent";
import { makeStyles } from "@material-ui/core/styles";
import mobileLogo from "../../assets/images/mobile.png";
import FilledButton from "../../utilities/FilledButton";
import UnFilledButton from "../../utilities/UnFilledButton";

const useStyles = makeStyles((theme) => ({
  header: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "48px",
    lineHeight: "50px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      lineHeight: "36px",
      textAlign: "left",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: '50px'
    },
  },
  highlight: {
    backgroundImage: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
  },
  para: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "26px",
    color: "#666666",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      color: "#2B2B2B",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    
  },
  para1: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "19px",
      color: "#666666",
      display: "inline",
      lineHeight: "145%",
    },
  },
  image: {
    width: "100%",
    height: "auto",
    filter: "drop-shadow(10px 24px 74px rgba(76, 115, 255, 0.15))",
  },
  smallButtons: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop:'32px'
    },
  },
  removeSmall: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  box1: {
    position: "absolute",
    width: "250px",
    height: "auto",
    padding: theme.spacing(2),
    left: "350px",
    top: "70px",
    background: "rgba(247, 247, 247, 0.7)",
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
    backdropFilter: "blur(14px)",
    borderRadius: "10px",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      left: "0px",
      top: "0px",
      height: "auto",
    },
    [theme.breakpoints.only("xs")]: {
      position: "absolute",
      left: "0px",
      height: "auto",
      top: "-35px",
    },
  },
  box2: {
    position: "absolute",
    width: "420px",
    height: "auto",
    right: "280px",
    bottom: "80px",
    background: "rgba(246, 246, 246, 0.7)",
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
    backdropFilter: "blur(14px)",
    borderRadius: "10px",
    color: "#000",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      left: "100px",
      width: "280px",
    },
    [theme.breakpoints.only("xs")]: {
      position: "absolute",
      left: "20px",
      height: "auto",
      bottom: "-15px",
      marginBottom:'32px'
    },
  },
}));

const ChildComponentA = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1 className={classes.header}>
        THE <span className={classes.highlight}>FASTEST-GROWING</span> TRADING
        COMMUNITY
      </h1>
      <p className={classes.para}>
        This is where dreams of making a huge fortune from trading become
        reality. Our members enjoys fantastically sure trading real-time signals
        .
      </p>
      <div className={classes.removeSmall}>
        <FilledButton buttonText={"Get Started"} />
      </div>
    </React.Fragment>
  );
};

const ChildComponentB = () => {
  const classes = useStyles();

  return (
    <>
      <div style={{ position: "relative" }}>
        <img src={mobileLogo} alt="mobile" className={classes.image} />
        <div className={classes.box1}>
          Masterrit is a community of people aiming to change their lives and
          make an impact in the world
        </div>
        <div className={classes.box2}>
          Whether you are new or an intermediate to trading , our community of
          skilled analysts and traders are here for you.
        </div>
      </div>
      <p className={classes.para1}>
        This is where dreams of making a huge fortune from trading become
        reality. Our members enjoys fantastically sure trading real-time signals
        .
      </p>
      <div className={classes.smallButtons}>
        <FilledButton
          buttonText={"Get Started"}
          buttonFn={() => {
            console.log("done");
          }}
        />
        <span style={{ width: "20px" }}></span>
        <UnFilledButton
          buttonText={"Learn More"}
          buttonFn={() => {
            console.log("done");
          }}
        />
      </div>
    </>
  );
};

const Top = () => (
  <GridComponent
    childComponentA={<ChildComponentA />}
    childComponentB={<ChildComponentB />}
  />
);

export default Top;
