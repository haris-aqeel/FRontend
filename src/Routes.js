import React, { useState, useEffect, Suspense } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { createBrowserHistory } from "history";
import Navbar from "./components/Navbar.js";
import LandingPage from "./pages/LandingPage.js";
import Footer from "./components/Footer.js";
// var LandingPage = React.lazy(() => import("./pages/LandingPage.js"));

export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return <Component {...props} />;
    }}
  />
);

export default function Routes() {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return "Loading..";
  }
  return (
    <Router history={createBrowserHistory()}>
      <CssBaseline />
      <Navbar />
      {/* <Suspense fallback={<h1>"Loading.."</h1>}> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
      {/* </Suspense> */}
      <Footer />
    </Router>
  );
}
