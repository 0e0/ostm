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
          <h1>media</h1>
          <img src={'https://photos-6.dropbox.com/t/2/AACerWtmLbDPLLZJBikWjH2L1eHoU_KxRnM7-gOi3zsJsA/12/589216228/jpeg/32x32/1/_/1/2/6.jpg/EPm5uN8EGNDADiACKAI/FzRgLPB3TyOpb9RZ4Q4-Lq268_sHqeh8AHnano1cntI?size=1024x768&size_mode=3'} />
          </RouteTransition>
        </div>
    );
  }
});
