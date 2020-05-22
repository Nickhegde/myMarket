import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { ROUTES } from 'consts';

export default function ProtectedRoute({ Path, Component }) {
  const loginData = useSelector(state => state.loginData);
  console.log("status", loginData);
  return (
    <Route
      path={Path}
      render={() => loginData.loginStatus ? <Component /> : <Redirect to={ROUTES.LOGIN} />}
    />
  );
}

