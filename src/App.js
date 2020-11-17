import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/users'>Users</Link>
        </nav>
        <Routes />
      </div>
    </Router>
  );
}

export default App;