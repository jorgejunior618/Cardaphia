import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from'./components/LandingPage/LandingPage';

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/restaurant" exact component={LandingPage} />
        <Route path="/restaurant" exact component={LandingPage} />
      </Switch>
    </BrowserRouter>
  )
}
