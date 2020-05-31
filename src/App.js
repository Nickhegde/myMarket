import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import { Login, Home, Register } from "containers";
import { ROUTES } from "consts";
import { ProtectedRoute } from "HOC";
import "./App.scss";

function App() {
  const loader = useSelector((state) => state.showLoader);
  return (
    <div className={`app`}>
      <div className={`${loader ? "overlay" : ""}`}></div>
      <Loader
        visible={loader}
        type="Oval"
        color="#61dafb"
        height={80}
        radius={10}
        timeout={0}
        className="loader"
      />
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <Route
            path={ROUTES.REGISTER}
            component={(props) => {
              return (
                <Register type={props.location.state.params.registerTitle} />
              );
            }}
          />
          <Route exact path={ROUTES.HOME} component={Home} />
          <Redirect from="/" to={ROUTES.HOME} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
