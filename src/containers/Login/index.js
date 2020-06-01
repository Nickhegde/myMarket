import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { loginUser, clearUserDetails } from "actions";
import { ROUTES, STRINGS } from "consts";
import logo from "./logo.svg";

import "./Login.scss";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const accountData = useSelector((state) => state.accountData);

  if (accountData.user) clearUserDetails(dispatch);

  if (accountData.userInfo) {
    return <Redirect to={ROUTES.HOME}></Redirect>;
  }

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onLogin = () => {
    loginUser(dispatch, { username, password });
  };

  const submitCheck = username && password;

  return (
    <div className="login-container">
      <div className="login-box">
        <header className="header">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="title">{STRINGS.MY_MARKET}</div>
        </header>
        <form className="login-form">
          <label htmlFor="username">{STRINGS.USERNAME}</label>
          <input
            className="username-field"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={onUsernameChange}
          ></input>
          <label htmlFor="password">{STRINGS.PASSWORD}</label>
          <input
            className="password-field"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onPasswordChange}
            autoComplete="on"
          ></input>
        </form>
        <div className="login-btn-grp">
          <button
            className={`login-btn ${submitCheck ? "" : "disabled"}`}
            onClick={submitCheck ? onLogin : () => { }}
          >
            {STRINGS.LOGIN}
          </button>
          <div className="registration_txt">{STRINGS.NEW_HERE}</div>
          <div className="register-btns">
            <button
              id="buyer-register"
              className="register-btn buy-register-btn"
            >
              <Link
                to={{
                  pathname: ROUTES.REGISTER,
                  state: { params: { registerTitle: STRINGS.BUYER } },
                }}
              >
                {STRINGS.LOOKING_BUY}
              </Link>
            </button>
            <button
              id="seller-register"
              className="register-btn sell-register-btn"
            >
              <Link
                to={{
                  pathname: ROUTES.REGISTER,
                  state: { params: { registerTitle: STRINGS.SELLER } },
                }}
              >
                {STRINGS.LOOKING_SELL}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
