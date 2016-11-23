import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Credits from './components/Credits';
import Join from './components/Join';
import Events from './components/Events';
import Resources from './components/Resources';
import Team from './components/Team';
import Blog from './components/Blog';
import Media from './components/Media';

require('./styles/index.less');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/join" component={Join} />
    <Route path="/credits" component={Credits} />
    <Route path="/events" component={Events} />
    <Route path="/team" component={Team} />
    <Route path="/resources" component={Resources} />
    <Route path="/blog" component={Blog} />
    <Route path="/media" component={Media} />
  </Router>), document.querySelector('.container'));
