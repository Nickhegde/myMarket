import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendOtp, setUserDetails } from "actions";
import { STRINGS } from "consts";

import "./Buyer.scss";

export default function Buyer({ onRegister }) {
  const user = useSelector((state) => state.accountData.user);
  const [name, setName] = useState(user ? user.name : ""),
    [mobileNo, setMobileNo] = useState(user ? user.mobileNo : ""),
    [otp, setOtp] = useState(''),
    [password, setPassword] = useState(user ? user.password : ""),
    [pincode, setPincode] = useState(user ? user.pincode : ""),
    [address, setAddress] = useState(user ? user.address : "");
  const dispatch = useDispatch();

  const setUser = () => {
    const user = {
      name,
      mobileNo,
      password,
      pincode,
      address,
    }
    setUserDetails(dispatch, user);
  }

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onMobileNoChange = (e) => {
    setMobileNo(e.target.value);
  };
  const onGetOtp = (e) => {
    e.preventDefault();
    setUser();
    sendOtp(dispatch, mobileNo);
  };
  const onSetOtp = (e) => {
    setOtp(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onPincodeChange = (e) => {
    setPincode(e.target.value);
  };
  const onAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setUser();
    onRegister({
      name,
      mobileNo,
      otp,
      password,
      pincode,
      address,
      registerType: "buyer",
    });
  };
  const submitCheck = name && mobileNo && otp && password && pincode && address;

  return (
    <div className="buyer-container">
      <h2 className="buyer-registration-title">
        {STRINGS.REGISTERATION_TITLE_BUYER}
      </h2>
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
          <button className={`get-otp-button ${mobileNo ? '' : 'disabled'}`} onClick={mobileNo ? onGetOtp : () => { }}>
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
          autoComplete='on'
        ></input>
        <label htmlFor="pincode">{STRINGS.PINCODE}</label>
        <input
          className="pincode-field"
          type="number"
          id="pincode"
          name="pincode"
          value={pincode}
          onChange={onPincodeChange}
        ></input>
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
      </form>
    </div>
  );
}
