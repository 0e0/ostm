import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import About from './components/About';
import Join from './components/Join';
import Events from './components/Events';
import Resources from './components/Resources';
import Membership from './components/Membership';
import Blog from './components/Blog';
import Media from './components/Media';

require("./index.less")

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/join" component={Join} />
    <Route path="/about" component={About} />
    <Route path="/events" component={Events} />
    <Route path="/membership" component={Membership} />
    <Route path="/resources" component={Resources} />
    <Route path="/blog" component={Blog} />
    <Route path="/media" component={Media} />
  </Router>), document.querySelector('.container'));
