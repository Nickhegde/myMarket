import React, { useState } from "react";
import { STRINGS } from "consts";

import "./Seller.scss";

export default function Seller({ onRegister }) {
  const [name, setName] = useState(""),
    [mobileNo, setMobileNo] = useState(""),
    [otp, setOtp] = useState(""),
    [password, setPassword] = useState(""),
    [type, setType] = useState("all"),
    [address, setAddress] = useState(""),
    [adhaarNo, setAdhaarNo] = useState(""),
    [panNo, setPanNo] = useState(""),
    [gstNo, setGstNo] = useState("");

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onMobileNoChange = (e) => {
    setMobileNo(e.target.value);
  };
  const onGetOtp = (e) => {};
  const onSetOtp = (e) => {
    setOtp(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onTypeChange = (e) => {
    setType(e.target.value);
  };
  const onAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const onAdhaarNoChange = (e) => {
    setAdhaarNo(e.target.value);
  };
  const onPanNoChange = (e) => {
    setPanNo(e.target.value);
  };
  const onGstNoChange = (e) => {
    setGstNo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onRegister({
      name,
      mobileNo,
      otp,
      password,
      type,
      address,
      adhaarNo,
      panNo,
      gstNo,
      registerType: "seller",
    });
  };
  const submitCheck =
    name &&
    mobileNo &&
    otp &&
    password &&
    type &&
    address &&
    adhaarNo &&
    panNo &&
    gstNo;

  return (
    <div className="seller-container">
      <h2 className="seller-registration-title">
        {STRINGS.REGISTERATION_TITLE_SELLER}
      </h2>
      <div className="seller-registration-section">
        <div className="seller-registration-box">
          <form className="registration-form">
            <label htmlFor="name">{STRINGS.NAME}</label>
            <input
              className="name-field"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={onNameChange}
            ></input>
            <div className="number-field">
              <label htmlFor="mobileNo">{STRINGS.MOBILE_NO}</label>
              <input
                className="mobileNo-field"
                type="number"
                id="mobileNo"
                name="mobileNo"
                value={mobileNo}
                onChange={onMobileNoChange}
              ></input>
              <button className="get-otp-button" onClick={onGetOtp}>
                {STRINGS.GET_OTP}
              </button>
              <div className="otp-container">
                <input
                  className="otp-field"
                  type="number"
                  id="otp"
                  name="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={onSetOtp}
                ></input>
              </div>
            </div>
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
            <div className="dropdown-container">
              <label htmlFor="supply-type">{STRINGS.SUPPLY_TYPE}</label>
              <select
                id="supply-type"
                name="type"
                onChange={onTypeChange}
                value={type}
              >
                <option value="all">{STRINGS.ALL}</option>
                <option value="flowers">{STRINGS.FLOWERS}</option>
                <option value="fruits">{STRINGS.FRUITS}</option>
                <option value="vegetables">{STRINGS.VEGETABLES}</option>
              </select>
            </div>
          </form>
        </div>
        <div className="seller-registration-box">
          <form className="registration-form">
            <label htmlFor="address">{STRINGS.ADDRESS}</label>
            <textarea
              className="address-field"
              type="text"
              id="address"
              name="address"
              value={address}
              rows="5"
              onChange={onAddressChange}
            ></textarea>
            <label htmlFor="adhaar-no">{STRINGS.ADHAAR_NO}</label>
            <input
              className="adhaar-no-field"
              type="text"
              id="adhaar-no"
              name="adhaar-no"
              value={adhaarNo}
              onChange={onAdhaarNoChange}
            ></input>
            <label htmlFor="pan-no">{STRINGS.PAN_NO}</label>
            <input
              className="pan-no-field"
              type="text"
              id="pan-no"
              name="pan-no"
              value={panNo}
              onChange={onPanNoChange}
            ></input>
            <label htmlFor="gst-no">{STRINGS.GST_NO}</label>
            <input
              className="gst-no-field"
              type="text"
              id="gst-no"
              name="gst-no"
              value={gstNo}
              onChange={onGstNoChange}
            ></input>
          </form>
        </div>
      </div>
      <div className="submit-container">
        <button
          className={`${submitCheck ? "" : "disabled"} submit-btn`}
          onClick={
            submitCheck
              ? onSubmit
              : (e) => {
                  e.preventDefault();
                }
          }
        >
          {STRINGS.SUBMIT}
        </button>
      </div>
    </div>
  );
}
