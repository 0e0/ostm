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
            <Link to="/signup">
              <h1 className="signup">Performance Sign-up</h1>
              </Link>
            </div>
            <div className='toJoin'>
              <h2 className="join-question">WHO can join?</h2>
                <h4 className='join-answer'>Anyone can join! Come to our open rehearsals that are held every week.</h4>
              <h2 className="join-question">WHERE are the rehearsals?</h2>
                <h4 className='join-answer'>Good Samaritan 3025 Terrace Dr, Las Cruces, NM 88011, We will be in the Creative Arts Room at Good Samaritan.</h4>
              <h2 className="join-question">WHEN does the rehearsal start?</h2>
                <h4 className='join-answer'>Every Tuesday from 5:45 PM to 6:30 PM, but you can stop by at anytime during the rehearsal.</h4>

              <h2 className="join-question">WHAT piece to perform?</h2>
                <h4 className='join-answer'>Uplifting, easy-going pieces are always welcome! Please try to keep our audience in mind when choosing your pieces.</h4>
              <h2 className="join-question">WHEN to submit copy of music?</h2>
                <h4 className='join-answer'>Email a pdf copy of your sheet music to operationspreadthemusic@gmail.com a week prior to the first rehearsal of the blitz you are performing for.</h4>
              <h2 className="join-question">WHO needs to submit music?</h2>
                <h4 className='join-answer'>Performers who needs accompaniment are required to submit their music as soon as possible.</h4>
              <h2 className="join-question">WHERE do I get more information about a specific blitz or rehearsal?</h2>
                <h4 className='join-answer'>More information can be found in our <span><Link to="/events" className='events-page'>events
                  </Link></span> page.</h4>

            </div>

          </div>
            <div>

            <h1 className='facebook'><a className='facebook-link' href="https://www.facebook.com/operationspreadthemusic/">Facebook</a></h1>
          </div>
          <div className="more-info">
          <h3>For more questions, feel free to email us at operationspreadthemusic@gmail.com</h3>
          </div>
        </RouteTransition>
      </div>
    );
  }
});
