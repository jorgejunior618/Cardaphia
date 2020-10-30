import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import Menu from './pages/Menu/Menu';
import Requests from './pages/Orders/Orders'
import Wait from './pages/Wait/Wait'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/restaurant" component={LandingPage} />
        <Route path="/menu" component={Menu} />
        <Route path="/orders" component={Requests} />
        <Route path="/waiting" component={Wait} />
      </Switch>
    </BrowserRouter>
  )
}
