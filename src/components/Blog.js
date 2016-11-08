import React from 'react';
import { RouteTransition } from 'react-router-transition';

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
            <ReasonforBeing />
          </div>
        </RouteTransition>
      </div>
    );
  }
});
