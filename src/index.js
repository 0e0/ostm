import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/App';
import styles from './index.less'
import Home from './components/Home';
import Join from './components/Join';
import Events from './components/Events';
import Resources from './components/Resources';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/join" component={Join}/>
      <Route path="/about" component={Home} />
      <Route path="/events" component={Events} />
      <Route path="/resources" component={Resources} />
    </Route>
  </Router>), document.querySelector('.container'));
