import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import "../../../utilities/style.css";
import login from "../../../assets/images/login.png";
import { Form, Formik } from "formik";
import {makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom'
// import { validationSchema } from "./Validate";
const useStyles = makeStyles((theme)=> ({
    highlight: {
        textDecoration: 'none',
        backgroundImage: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
        backgroundSize: "100%",
        WebkitBackgroundClip: "text",
        MozBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        MozTextFillColor: "transparent",
      },
}))
const LoginAccountMain = () => {
    const classes = useStyles();
    const [initialValues, setInitialValues] = useState({
        userName: "",
        password: "",
    });

    
    const submitForm = () => { };

    return (
        <div className="component-center">
            <Paper elevation={0} className="component-paper">
                <div className="component-form">
                    <h1 className="component-header">Hello! Welcome Back</h1>
                    <small className="component-title">
                        Don’t have an account?<Link to="/signup" className={classes.highlight}> Sign Up</Link>
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
                                <Grid container style={{ marginTop: "20px" }} className={classes.flex}>
                                    <Grid item xl={12} md={12} sm={12}>
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
                                        <Grid
                                            className={classes.marginTop}
                                            item
                                            xl={12}
                                            md={12}
                                            xs={12}
                                        >
                                            <small>Forgot password?</small>
                                        </Grid>
                                    </Grid>
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
                                                buttonText="Log In"
                                                type="submit"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="component-image">
                    <img
                        src={login}
                        alt="person"
                        className="image-login-account"
                    />
                </div>
            </Paper>
        </div>
    );
};

export default LoginAccountMain;
