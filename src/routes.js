import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import styles from './index.less';
import About from './components/About';
import Join from './components/Join';
import Events from './components/Events';
import Resources from './components/Resources';
import Membership from './components/Membership';
import Blog from './components/Blog';
import Media from './components/Media';

export default (
  <div>
  <Route path="/" component={App} />
  <Route path="/join" component={Join} />
  <Route path="/about" component={About} />
  <Route path="/events" component={Events} />
  <Route path="/membership" component={Membership} />
  <Route path="/resources" component={Resources} />
  <Route path="/blog" component={Blog} />
  <Route path="/media" component={Media} />
  </div>
);
