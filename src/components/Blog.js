import React from 'react';
import { RouteTransition } from 'react-router-transition';


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
          <h1>blog</h1>
          <img src={require('./images/coming-soon.gif')} />
          </div>
        </RouteTransition>
      </div>
    );
  }
});
