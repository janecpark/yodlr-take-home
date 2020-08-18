import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Admin from './Admin';
import Profile from './Profile';

/**
 * Routes to 
 * - Admin
 * - Sign up page
 * - Homepage 
 */

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/admin">
        <Admin />
      </Route>
      <Route exact path="/signup">
        <Profile />
      </Route>
    </Switch>
  );
};

export default Routes;
