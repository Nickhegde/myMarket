import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Dashboard, Register } from 'containers';
import { ROUTES } from 'consts';
import { ProtectedRoute } from 'HOC';
import './App.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.REGISTER} component={Register} />
          <ProtectedRoute exact Path={ROUTES.DASHBOARD} Component={Dashboard} />
          <Redirect to={ROUTES.LOGIN} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
