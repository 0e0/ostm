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
                <h1><a href="https://www.facebook.com/operationspreadthemusic/">Facebook</a></h1>
                <h1> operationspreadthemusic@gmail.com</h1>
                <div
                  class="fb-like"
                  data-share="true"
                  data-width="450"
                  data-show-faces="true">
                </div>
                </RouteTransition>
              </div>
    );
  }
});
