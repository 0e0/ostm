import React from 'react';
import { RouteTransition } from 'react-router-transition';
import { Link } from 'react-router';

import ReasonforBeing from './blogs/11-8-16';

export default React.createClass({
  render() {
    return (
      <div className="blog-posts">
      <h1>Operation Spread the Music</h1>
        <RouteTransition
          pathname={this.props.location.pathname}
          atEnter={{ translateX: 100 }}
          atLeave={{ translateX: -100 }}
          atActive={{ translateX: 0 }}
          mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
          >
          <div>
            <div>
            <h1 className='blog-page-title'>blog</h1>
            <Link to="/"><img src={require('./images/home-button.png')} /></Link>
            </div>
            <ReasonforBeing />
          </div>
          <div className="more-info">
          <h3>For more information, email us at operationspreadthemusic@gmail.com</h3>
          </div>
        </RouteTransition>
      </div>
    );
  }
});
