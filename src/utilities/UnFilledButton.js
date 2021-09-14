import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    height: "48px",
    minWidth: "125px",
    left: "0px",
    top: "0px",
    border: "3px solid transparent",
    borderImageSlice: 3,
    borderImageSource: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    color: "#000",
    borderRadius: "30px",
    fontWeight: 700,
    fontSize: "15px",
    padding: theme.spacing(1),
    cursor: "pointer",
    WebkitMask:
      "linear-gradient(#fff 0 0) padding-box, \n linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "destination-out",
    maskComposite: "exclude",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const UnFilledButton = ({ buttonText, buttonFn }) => {
  const classes = useStyles();

  return <button className={classes.button}>{buttonText}</button>;
};

export default UnFilledButton;
