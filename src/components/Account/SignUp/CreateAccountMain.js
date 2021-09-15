import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import "../../../utilities/style.css";
import accountcreatepic from "../../../assets/images/createaccount.png";
import { Form, Formik } from "formik";
import AccountSignUpForm from "./AccountSignUpForm";
// import { validationSchema } from "./Validate";

const CreateAccountMain = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [initialValues, setInitialValues] = useState({
    sponsorUserName: "",
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    dateOfBirth: "",
  });
  const submitForm = () => {};

  return (
    <div className="component-center">
      <Paper elevation={0} className="component-paper">
        <div className="component-form">
          <h1 className="component-header">Create your account</h1>
          <small className="component-title">
            Already have an account?<span>Login</span>
          </small>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={(values, { resetForm }) => {
              submitForm(values);
              resetForm({
                values: "",
              });
            }}
          >
            {({ values }) => (
              <Form
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "inherit",
                }}
              >
                <AccountSignUpForm
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  values={values}
                />
              </Form>
            )}
          </Formik>
        </div>
        <div className="component-image">
          <img
            src={accountcreatepic}
            alt="person"
            className="image-create-account"
          />
        </div>
      </Paper>
    </div>
  );
};

export default CreateAccountMain;
