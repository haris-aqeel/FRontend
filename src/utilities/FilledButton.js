import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    height: "48px",
    width: "133px",
    left: "0px",
    top: "0px",
    borderRadius: "20px",
    border: "none",
    outline: "none",
    padding: "14px 22px 14px 22px",
    color: "white",
    background: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
  },
}));

const FilledButton = ({ buttonText, buttonFn, type }) => {
  const classes = useStyles();

  return type === "submit" ? (
    <button className={classes.button} type="submit">
      {buttonText}
    </button>
  ) : (
    <button className={classes.button} onClick={buttonFn}>
      {buttonText}
    </button>
  );
};

export default FilledButton;
