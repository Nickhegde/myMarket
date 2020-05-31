import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "actions";
import { STRINGS } from "consts";
import { Buyer, Seller } from "./components";

import "./Register.scss";

export default function Register({ type }) {
  const dispatch = useDispatch();
  const accountData = useSelector((state) => state.showLoader);
  const onRegister = (params) => {
    registerUser(dispatch, params);
  };

  return (
    <div className="register-container">
      {type === STRINGS.BUYER ? (
        <Buyer onRegister={onRegister} />
      ) : (
        <Seller onRegister={onRegister} />
      )}
    </div>
  );
}
