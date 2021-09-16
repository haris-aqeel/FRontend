import React from "react";
import GridComponent from "../../utilities/GridComponent";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/images/logo.png";
import footerTextLogo from "../../assets/images/footerText.png";
import phone from "../../assets/images/phone.png";
import map from "../../assets/images/map.png";
import mail from "../../assets/images/mail.png";

const useStyles = makeStyles((theme) => ({
  secondFooter: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontWeight: "600",
    paddingTop: '45px',
    paddingBottom: '42px',
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      
    },
  },
  responsive: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
      paddingBottom: "10px"
    },
  },
  responsivedisplay1: {
    display: "none",
    marginTop: '70px',
    [theme.breakpoints.down("sm")]: {
      display: 'inline-block'
    },
  },
  responsivedisplay2: {
    display: "none",
    marginTop: '50px',
    [theme.breakpoints.down("sm")]: {
      display: 'inline-block'
    },
  },
  removeText: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  childBlist: {
    listStyleType: "none",
    listStyle: "none",
    marginRight: "15px",
    [theme.breakpoints.only("xs")]: {
      marginRight: "0px",
      paddingLeft: "0px"
    },
  },
  footerLogo: {
    [theme.breakpoints.only("xs")]: {
      marginRight: "0px",
      paddingLeft: "0px",
      paddingTop: '30px'
    },
  },
  childBlist2: {
    listStyleType: "none",
    listStyle: "none",
    marginRight: "15px",
    [theme.breakpoints.only("xs")]: {
      marginRight: "0px",
      paddingLeft: "0px"
    },
  },
  ten: {
    paddingBottom: '10px',
    fontWeight: 800
  }
}));

const ChildComponentA = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ul style={{ listStyleType: "none", listStyle: "none" }} className={classes.footerLogo}>
        <li style={{ paddingBottom: "20px" }}>
          <span>
            <img src={logo} alt="logo" className={classes.footerLogo}/>
          </span>
          <span className={classes.removeText}>
            <img src={footerTextLogo} alt="footer text logo masterrit" />
          </span>
        </li>
      
          
        <li className={classes.responsive} style={{ paddingBottom: "10px" }}>
          {window.location.pathname === '/'
          ? "Privacy Policy" : "info@goprostars.com"}
        </li>
        <li className={classes.responsive} style={{ paddingBottom: "10px" }}>
        {window.location.pathname === '/'
          ? "Terms & Condition" : "Terms & Conditions"}
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
        <li style={{ paddingBottom: "10px" }}>Testimonials</li>
        <li style={{ paddingBottom: "10px" }}>Community</li>
        <li style={{ paddingBottom: "10px" }}>
          <li>Card</li>
        </li>
        <li className={classes.responsivedisplay1} style={{ paddingBottom: "10px" }}>
          Privacy Policy
        </li>
        

      </ul>
      <ul className={classes.childBlist2}>
        <li className={classes.ten}>Contact Us</li>
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
          <span>Lorem Ipsum 12,<br/> 1342 Lorem</span>
        </li>
        <li className={classes.responsivedisplay2} style={{ paddingBottom: "10px" }}>
          Terms & Condition
        </li>
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
