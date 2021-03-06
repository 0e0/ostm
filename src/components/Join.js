import React from 'react';
import { RouteTransition } from 'react-router-transition';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className='text'>
        <h1>Operation Spread the Music</h1>
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
                <h4 className='join-answer'>Anyone can join! Come to our open rehearsals that are held every week so we can conduct a placement audition. For more information, refer to the <a href="#audition">placement audition criterias and process</a>.</h4>
              <h2 className="join-question">WHERE are the rehearsals?</h2>
                <h4 className='join-answer'>Good Samaritan 3025 Terrace Dr, Las Cruces, NM 88011, We will be in the Creative Arts Room at Good Samaritan.</h4>
              <h2 className="join-question">WHEN does the rehearsal start?</h2>
                <h4 className='join-answer'>Every Tuesday from 5:45 PM to 6:30 PM. Please be on time.</h4>
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
            <div id="audition">
              <h1>placement audition criterias and process</h1>
              <div className='toAudition'>
                <h3>1. Does candidate have an ability to reasonably communicate through instrument or voice?</h3>
                <h3>2. Is skill level reasonably pleasant?</h3>
                <h3>3. Is music genre and content appropriate for OSTM?</h3>
                <h3>4. Is singer able to project with reasonable volume and intonation? (i.e. Can they sing on key?)</h3>
                <h3>5. Is candidate able to attend all rehearsals and performances?</h3>
                <h3>6. Is candidate&#39;s attitude  respectful and appropriate for OStM?</h3>
                <h3>7. Does candidate understand that performances are not just a venue to try out music, but a therapeutic service for assisted living patients?</h3>
                <h3>8.  Is candidate a soloist or invited as a member of ensemble?</h3>
              </div>
            </div>

          <h1 className='facebook'><a className='facebook-link' href="https://www.facebook.com/operationspreadthemusic/">Facebook</a></h1>
          <div className="more-info">
          <h3>For more information, email us at operationspreadthemusic@gmail.com</h3>
          </div>
        </RouteTransition>
      </div>
    );
  }
});
