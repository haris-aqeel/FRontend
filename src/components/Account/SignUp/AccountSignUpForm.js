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
}));

const AccountSignUpForm = ({ activeStep, setActiveStep, values }) => {
  console.log(activeStep);
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
          <Grid item xs={6} xl={6}></Grid>
          <Grid item xs={6} xl={6}>
            <FilledButton
              buttonText={activeStep >= 3 ? "Finish" : "Continue"}
              buttonFn={
                activeStep < 3
                  ? () => setActiveStep(activeStep + 1)
                  : () => setActiveStep(activeStep)
              }
              // type={activeStep=3 ? "submit": "null"}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AccountSignUpForm;
