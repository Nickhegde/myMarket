import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { setLoginStatus } from 'actions';
import { ROUTES, STRINGS } from 'consts';
import logo from './logo.svg';

import './Login.scss';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const loginData = useSelector(state => state.loginData);

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const onLogin = () => {
    setLoginStatus(dispatch, { username, password });
  }

  if (loginData.loginStatus) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  } else {
    return (
      <div className='login-container'>
        <div className='login-box'>
          <header className='header'>
            <img src={logo} className="app-logo" alt="logo" />
            <div className='title'>{STRINGS.MY_MARKET}</div>
          </header>
          <form className='login-form'>
            <label for='username'>{STRINGS.USERNAME}</label>
            <input className='username-field' type='text' id='username' name='username' value={username} onChange={onUsernameChange}></input>
            <label for='password'>{STRINGS.PASSWORD}</label>
            <input className='password-field' type='password' id='password' name='password' value={password} onChange={onPasswordChange}></input>
          </form>
          <button className='login-btn' onClick={onLogin} >
            {STRINGS.LOGIN}
          </button>
        </div>
      </div>
    );
  }
}
