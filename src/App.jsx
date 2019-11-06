import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './pages/Home/Home';
import NotFoundPage from './pages/NotFound/NotFound';

import Navbar from './components/Navbar/Navbar';

const App = () => (
  <Router>
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="*" component={NotFoundPage} />
      </Switch>
    </>
  </Router>
);

export default App;
