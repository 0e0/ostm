import React from 'react';
import { RouteTransition } from 'react-router-transition';
import { Link } from 'react-router';

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
          <div>
            <div>
            <h1>join</h1>
            <Link to="/"><img src={require('./images/home-button.png')} /></Link>
            </div>
            <div className='toJoin'>
              <h2>WHO can join?</h2>
                <h4>Anyone can join! Come to our open rehearsals that are held every week.</h4>
              <h2>WHERE are the rehearsals?</h2>
                <h4>Good Samaritan 3025 Terrace Dr, Las Cruces, NM 88011</h4>
                <h4>We will be in the Creative Arts Room</h4>
              <h2>WHEN does it start?</h2>
                <h4>Every Tuesday from 5:45 PM to 7:00 PM, but you can stop by at anytime during the rehearsal.</h4>

            </div>
          </div>
          <div>
            <h2>For more questions, feel free to email us at <span><h4>operationspreadthemusic@gmail.com</h4></span></h2>
          </div>
          <div>
            <h1 className='facebook'><a href="https://www.facebook.com/operationspreadthemusic/">Facebook</a></h1>
          </div>
        </RouteTransition>
      </div>
    );
  }
});
