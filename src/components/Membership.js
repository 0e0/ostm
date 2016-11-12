import React from 'react';
import { RouteTransition } from 'react-router-transition';
import Amanda from './membership/Amanda';
import Ejerson from './membership/Ejerson';
import Hannah from './membership/Hannah';

export default React.createClass({


  render() {
    return (
      <div className='text'>
        <RouteTransition
          pathname={this.props.location.pathname}
          atEnter={{ translateY: -100 }}
          atLeave={{ translateY: 100 }}
          atActive={{ translateY: 0 }}
          mapStyles={styles => ({ transform: `translateY(${styles.translateY}%)` })}
          >
          <h1>membership</h1>
          <Amanda />
          <Ejerson />
          <Hannah />
        </RouteTransition>
      </div>
    );
  }
});
