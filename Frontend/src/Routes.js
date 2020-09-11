import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import LandingPage from './Containers/LandingPage/LandingPage';
import Menu from './Containers/Menu/Menu';
import Requests from './Containers/Orders/Orders'
import Wait from './Containers/Wait/Wait'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/restaurant" exact component={LandingPage} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/orders" exact component={Requests} />
        <Route path="/waiting" exact component={Wait} />
      </Switch>
    </BrowserRouter>
  )
}
