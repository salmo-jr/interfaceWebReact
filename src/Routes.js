import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from './pages/Users';
import Home from './pages/Home';
import About from './pages/About';

const routes = () => {
    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL*/}
    return(
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
    );
}

export default routes;