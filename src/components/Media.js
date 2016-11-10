import React from 'react';
import { RouteTransition } from 'react-router-transition';

export default React.createClass({
  render() {

    return (
      <div className='text'>
        <RouteTransition
          pathname={this.props.location.pathname}
          atEnter={{ translateX: -100 }}
          atLeave={{ translateX: 100 }}
          atActive={{ translateX: 0 }}
          mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
          >
            <div>
              <h1>media</h1>
            <div className="photos">
              <img src={require('./images/media/1.jpg')} />
              <img src={require('./images/media/2.jpg')} />
              <img src={require('./images/media/3.jpg')} />
              <img src={require('./images/media/4.jpg')} />
              <img src={require('./images/media/5.jpg')} />
              <img src={require('./images/media/6.jpg')} />
              <img src={require('./images/media/7.jpg')} />
              <img src={require('./images/media/8.jpg')} />
              <img src={require('./images/media/9.jpg')} />
          </div>
          </div>
          </RouteTransition>
        </div>
    );
  }
});
