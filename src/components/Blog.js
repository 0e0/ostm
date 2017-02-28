import React from 'react';
import { RouteTransition } from 'react-router-transition';
import { Link } from 'react-router';

import ReasonforBeing from './blogs/11-8-16';

export default React.createClass({
  render() {
    return (
      <div className='text'>
        <RouteTransition
          pathname={this.props.location.pathname}
          atEnter={{ translateX: 100 }}
          atLeave={{ translateX: -100 }}
          atActive={{ translateX: 0 }}
          mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
          >
          <div>
            <div>
            <h1>blog</h1>
            <Link to="/"><img src={require('./images/home-button.png')} /></Link>
            </div>
            <ReasonforBeing />
          </div>
          <div className="more-info">
          <h3>For more information, feel free to email us at operationspreadthemusic@gmail.com</h3>
          </div>
        </RouteTransition>
      </div>
    );
  }
});
