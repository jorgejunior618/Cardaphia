import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import LandingPage from './Containers/LandingPage/LandingPage';
import Menu from './Containers/Menu/Menu';

export default function Routes() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/restaurant" exact component={LandingPage} />
        <Route path="/menu" exact component={Menu} />
      </Switch>
    </BrowserRouter>
  )
}
