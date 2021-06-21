import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import GameList from './GameList';
import GameDet from './GameDet';

const Routes = () => (
  <>
    <Navbar />
    <Switch>
      <Route path="/" component={GameList} exact />
      <Route path="/:guid" component={GameDet} />
      <Route component={Error} />
    </Switch>
  </>
);

export default Routes;
