import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { Field } from "formik";
import {
  renderTextFieldEdit,
  renderSelectFieldEdit,
  renderTextArea,
  CustomCheckBoxComponent,
} from "../../../utilities/WtFields";
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
  step_line: {
    width: "153px",
    height: "0px",
    border: "4px solid #D9D9D9"
  },
  step_line1: {
    width: "45.9px",
    height: "0px",
    border: "4px solid #4C73FF"
  },
  step_line2: {
    width: "91.8px",
    height: "0px",
    border: "4px solid #4C73FF"
  },
  step_line3: {
    width: "153px",
    height: "0px",
    border: "4px solid #4C73FF"
  }
}));

const AccountSignUpForm = ({ activeStep, setActiveStep, values }) => {
  const checkDisabledButton = () => {
    if (activeStep === 1){
      return values.sponsorUserName !== "" && values.userName !==""
      ?
      true
      :
      false
    }else if (activeStep === 2){
      return values.firstName !== "" && values.lastName !=="" && values.email && values.password
      ?
      true
      :
      false
    }else{
      return values.country !== "" && values.dateOfBirth !==""
      ?
      true
      :
      false
    }
  }
  const classes = useStyles();
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
                    item
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Field
                      name="password"
                      label="Password"
                      component={renderTextFieldEdit}
                    />{" "}
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
          spacing={2}
          className={classes.flexController}
        >
          <Grid item xs={6} xl={6}>
            <div>
                <div className={classes.steps}>Step {activeStep} of 3</div>
                <div className={classes.step_line}>
                  <span className={activeStep == 1 ? classes.step_line1: activeStep == 2 ? classes.step_line2 : classes.step_line3}></span>
                </div>
            </div>
          </Grid>
          <Grid item xs={6} xl={6}>
            <FilledButton
              buttonText={activeStep >= 3 ? "Finish" : "Continue"}
              buttonFn={
                activeStep < 3
                  ? () => setActiveStep(activeStep + 1)
                  : () => setActiveStep(activeStep)
              }
              type={activeStep=3 ? "submit": "null"}
              disabled={() => checkDisabledButton()}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AccountSignUpForm;
