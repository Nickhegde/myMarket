import React from "react";
import { Link } from "react-router-dom";
import { ROUTES, STRINGS } from "consts";

import "./Home.scss";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-btn-grp">
        <Link className="home-login-signup-btn" to={ROUTES.LOGIN}>
          {STRINGS.LOGIN}/{STRINGS.SIGNUP}
        </Link>
      </div>
    </div>
  );
}
