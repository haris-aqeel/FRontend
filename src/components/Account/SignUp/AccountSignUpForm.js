import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { Field } from "formik";
import { renderTextFieldEdit } from "../../../utilities/WtFields";
import FilledButton from "../../../utilities/FilledButton";

const useStyles = makeStyles((theme) => ({
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  flex: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
    height: "400px",
  },
  flexController: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  marginTop: {
    marginTop: "0.4rem",
  },
  steps: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "145.5%",
    color: "#666666",
  },
  step_line1: {
    width: "153px",
    height: "4px",
    background: "linear-gradient(90deg, #4C73FF , 33%, #D9D9D9 66%)",
  },

  step_line2: {
    width: "153px",
    height: "4px",
    background: "linear-gradient(90deg, #4C73FF , 66%, #D9D9D9 33%)",
  },

  step_line3: {
    width: "153px",
    height: "4px",
    background: "linear-gradient(90deg, #4C73FF , 100%, #D9D9D9 0%)",
  },
  button: {
    background: "none!important",
    border: "none",
    padding: "0!important",
    color: "#4C73FF",
    cursor: "pointer",
    position: "absolute",
    left: "270px",
    top: "20px",
  },
  manageFootForm: {
    display: "flex",
    alignItems: "center",
  },
}));

const AccountSignUpForm = ({
  activeStep,
  setActiveStep,
  values,
  errors,
  touched,
}) => {
  const checkDisabledButton = () => {
    if (activeStep === 1) {
      return values.sponsorUserName === "" ||
        values.userName === "" ||
        (touched.sponsorUserName && errors.sponsorUserName) ||
        (touched.userName && errors.userName)
        ? true
        : false;
    } else if (activeStep === 2) {
      return values.firstName === "" ||
        values.lastName === "" ||
        values.email === "" ||
        values.password === "" ||
        (touched.firstName && errors.firstName) ||
        (touched.lastName && errors.lastName) ||
        (touched.email && errors.email) ||
        (touched.password && errors.password)
        ? true
        : false;
    } else {
      return values.country === "" ||
        values.dateOfBirth === "" ||
        (touched.country && errors.country) ||
        (touched.dateOfBirth && errors.dateOfBirth)
        ? true
        : false;
    }
  };
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <React.Fragment>
      <Grid container style={{ marginTop: "20px" }} className={classes.flex}>
        {(() => {
          switch (activeStep) {
            case 1:
              return (
                <Grid item xl={12} md={12} sm={12}>
                  <Grid
                    className={classes.marginTop}
                    item
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    {console.log(values)}
                    <Field
                      name="sponsorUserName"
                      label="Sponsor Username"
                      component={renderTextFieldEdit}
                    />{" "}
                  </Grid>
                  <Grid
                    className={classes.marginTop}
                    item
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Field
                      name="userName"
                      label="Username"
                      component={renderTextFieldEdit}
                    />{" "}
                  </Grid>
                </Grid>
              );

              break;
            case 2:
              return (
                <Grid item xl={12} md={12} sm={12}>
                  <Grid
                    className={classes.marginTop}
                    item
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Field
                      name="firstName"
                      label="First Name"
                      component={renderTextFieldEdit}
                    />{" "}
                  </Grid>
                  <Grid
                    className={classes.marginTop}
                    item
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Field
                      name="lastName"
                      label="Last Name"
                      component={renderTextFieldEdit}
                    />{" "}
                  </Grid>
                  <Grid
                    className={classes.marginTop}
                    item
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Field
                      name="email"
                      label="Email"
                      component={renderTextFieldEdit}
                    />{" "}
                  </Grid>
                  <Grid
                    className={classes.marginTop}
                    style={{ position: "relative" }}
                    item
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Field
                      name="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      component={renderTextFieldEdit}
                    />{" "}
                    {values.password && (
                      <button
                        type="button"
                        className={classes.button}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {!showPassword ? "Show" : "Hide"}
                      </button>
                    )}
                  </Grid>
                </Grid>
              );

              break;
            case 3:
              return (
                <Grid item xl={12} md={12} sm={12}>
                  <Grid
                    className={classes.marginTop}
                    item
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Field
                      name="country"
                      label="Your Country"
                      component={renderTextFieldEdit}
                    />{" "}
                  </Grid>
                  <Grid
                    className={classes.marginTop}
                    item
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Field
                      name="dateOfBirth"
                      label="Date Of Birth"
                      component={renderTextFieldEdit}
                    />{" "}
                  </Grid>
                </Grid>
              );

              break;

            default:
              break;
          }
        })()}
        <Grid
          item
          xl={12}
          xs={12}
          spacing={0}
          className={classes.flexController}
        >
          <Grid item xs={12} sm={6} xl={6}>
            {/*  */}

            <div className={classes.steps}>Step {activeStep} of 3</div>
            <div
              className={
                activeStep == 1
                  ? classes.step_line1
                  : activeStep == 2
                  ? classes.step_line2
                  : classes.step_line3
              }
            ></div>
          </Grid>
          <Grid item xs={12} sm={6} xl={6}>
            <FilledButton
              buttonText={activeStep >= 3 ? "Finish" : "Continue"}
              buttonFn={
                activeStep < 3
                  ? () => setActiveStep(activeStep + 1)
                  : () => setActiveStep(activeStep)
              }
              type={activeStep >= 3 ? "submit" : "button"}
              disabled={checkDisabledButton()}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AccountSignUpForm;
