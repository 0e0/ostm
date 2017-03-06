import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';

import reducers from './reducers';
import promise from 'redux-promise';

import App from './components/App';
import Credits from './components/Credits';
import Join from './components/Join';
import Events from './components/Events';
import Team from './components/Team';
import Blog from './components/Blog';
import Responsibilities from './components/Responsibilities';
import Media from './components/Media';
import Signup from './components/sign-up';
import PostsShow from './components/posts_show';
import Resources from './components/Resources';

require('./styles/index.less');

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);


ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/join" component={Join} />
    <Route path="/credits" component={Credits} />
    <Route path="/events" component={Events} />
    <Route path="/team" component={Team} />
    <Route path="/responsibilities" component={Responsibilities} />
    <Route path="/resources" component={Resources} />
    <Route path="/blog" component={Blog} />
    <Route path="/media" component={Media} />
    <Route path="/signup" component={Signup} />
    <Route path="/posts/:id" component={PostsShow} />

  </Router>
  </Provider>
), document.querySelector('.container'));
