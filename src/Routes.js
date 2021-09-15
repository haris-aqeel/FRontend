import React, { useState, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { createBrowserHistory } from "history";
import LandingPage from "./pages/LandingPage.js";
import AccountCreation from "./pages/AccountCreation";
import Navbar from "./components/Wrapper/Navbar.js";
import Footer from "./components/Wrapper/Footer.js";

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
  const [loading] = useState(false);

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
        <Route exact path="/signup" component={AccountCreation} />
      </Switch>
      {/* </Suspense> */}
      <Footer />
    </Router>
  );
}
