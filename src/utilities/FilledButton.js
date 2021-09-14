import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    height: "45px",
    width: "130px",
    left: "0px",
    top: "0px",
    borderRadius: "20px",
    border: "none",
    outline: "none",
    padding: "14px 24px 14px 24px",
    color: "white",
    background: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    fontWeight: 700,
    fontSize: "15px",
    cursor: "pointer",
  },
}));

const FilledButton = ({ buttonText, buttonFn }) => {
  const classes = useStyles();

  return <button className={classes.button}>{buttonText}</button>;
};

export default FilledButton;
