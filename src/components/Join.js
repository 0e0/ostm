import React from 'react';
import { RouteTransition } from 'react-router-transition';

export default React.createClass({
  render() {
    return (
      <div className='text'>
        <RouteTransition
          pathname={this.props.location.pathname}
          atEnter={{ translateY: 100 }}
          atLeave={{ translateY: -100 }}
          atActive={{ translateY: 0 }}
          mapStyles={styles => ({ transform: `translateY(${styles.translateY}%)` })}
          >
          <div className="facebook">
          <h1><a href="https://www.facebook.com/operationspreadthemusic/">Facebook</a></h1>
          </div>
          <div>
          <h1>operationspreadthemusic@gmail.com</h1>
          </div>
        </RouteTransition>
      </div>
    );
  }
});
