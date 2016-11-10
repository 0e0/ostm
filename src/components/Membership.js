import React from 'react';
import { RouteTransition } from 'react-router-transition';
import Ejerson from './Ejerson';

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
          <div className='membership'>
            <h1>membership</h1>
            <div className='ambassadors'>
            <Ejerson />

            </div>
          </div>
        </RouteTransition>
      </div>
    );
  }
});
