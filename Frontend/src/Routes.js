import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import LandingPage from './Containers/LandingPage/LandingPage';
import Menu from './Containers/Menu/Menu';
import Requests from './Containers/Requests/Requests'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/restaurante" exact component={LandingPage} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/pedidos" exact component={Requests} />
      </Switch>
    </BrowserRouter>
  )
}
