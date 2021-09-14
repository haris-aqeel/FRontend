import React from "react";
import GridComponent from "../utilities/GridComponent";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/images/logo.png";
import footerTextLogo from "../assets/images/footerText.png";
import phone from "../assets/images/phone.png";
import map from "../assets/images/map.png";
import mail from "../assets/images/mail.png";

const useStyles = makeStyles((theme) => ({
  secondFooter: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  responsive: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  removeText: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const ChildComponentA = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ul style={{ listStyleType: "none", listStyle: "none" }}>
        <li style={{ paddingBottom: "20px" }}>
          <span>
            <img src={logo} alt="logo" />
          </span>
          <span className={classes.removeText}>
            <img src={footerTextLogo} alt="footer text logo masterrit" />
          </span>
        </li>
        <li className={classes.responsive} style={{ paddingBottom: "10px" }}>
          Privacy Policy
        </li>
        <li className={classes.responsive} style={{ paddingBottom: "10px" }}>
          Terms & Condition
        </li>
      </ul>
    </React.Fragment>
  );
};

const ChildComponentB = () => {
  const classes = useStyles();
  return (
    <div className={classes.secondFooter}>
      <ul
        style={{
          listStyleType: "none",
          listStyle: "none",
          marginRight: "15px",
        }}
      >
        <li style={{ paddingBottom: "10px" }}>About Us</li>
        <li style={{ paddingBottom: "10px" }}>Learn More</li>
        <li style={{ paddingBottom: "10px" }}>Testimonials</li>
        <li style={{ paddingBottom: "10px" }}>Community</li>
        <li style={{ paddingBottom: "10px" }}>
          <li>Card</li>
        </li>
      </ul>
      <ul style={{ listStyleType: "none", listStyle: "none" }}>
        <li style={{ paddingBottom: "10px" }}>Contact Us</li>
        <li style={{ paddingBottom: "10px" }}>
          <span style={{ marginRight: "8px" }}>
            <img src={phone} alt="phone" />
          </span>
          <span>+ 123 1412 112 42</span>
        </li>
        <li style={{ paddingBottom: "10px" }}>
          <span style={{ marginRight: "8px" }}>
            <img src={mail} alt="mail" />
          </span>
          <span>contact@masterrit.co.uk</span>
        </li>
        <li style={{ paddingBottom: "10px" }}>
          <span style={{ marginRight: "8px" }}>
            <img src={map} alt="map" />
          </span>
          <span>Lorem Ipsum 12, 1342 Lorem</span>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#393773", color: "#fff" }}>
      <GridComponent
        childComponentA={<ChildComponentA />}
        childComponentB={<ChildComponentB />}
        background="#393773"
        marginBottom={true}
      />
    </div>
  );
};

export default Footer;
