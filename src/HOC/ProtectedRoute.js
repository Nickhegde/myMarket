import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { ROUTES } from 'consts';

export default function ProtectedRoute({ Path, Component }) {
  const accountData = useSelector(state => state.accountData);
  console.log("status", accountData);
  return (
    <Route
      path={Path}
      render={() => accountData.userInfo ? <Component /> : <Redirect to={ROUTES.LOGIN} />}
    />
  );
}

