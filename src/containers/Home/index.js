import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, clearUserDetails } from "actions";
import { ROUTES, STRINGS } from "consts";

import "./Home.scss";

export default function Home() {
  const dispatch = useDispatch();
  const accountData = useSelector((state) => state.accountData);
  const onLogout = () => {
    logoutUser(dispatch);
  };
  return (
    <div className="home-container">
      <div className="home-btn-grp">
        {accountData.userInfo ? (
          <button className="home-logout-btn" onClick={onLogout}>
            {STRINGS.LOGOUT}
          </button>
        ) : (
            <Link className="home-login-signup-btn" to={ROUTES.LOGIN}>
              {STRINGS.LOGIN} / {STRINGS.SIGNUP}
            </Link>
          )}
      </div>
    </div>
  );
}
