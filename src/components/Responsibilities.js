import React from 'react';
import { Link } from 'react-router';


import Responsibilities from '../containers/individual-responsibility';

export default React.createClass({
  render() {
    return (
      <div className='responsibilities'>
      <h1>Operation Spread the Music</h1>
        <h1>responsibilities</h1>
        <Link to="/"><img src={require('./images/home-button.png')} /></Link>
        <div className='reminder'>
          <h2>Everyone is responsible for making sure that any assigned responsibilities or performance commitment is met. If you cannot make it to a performance or rehearsal please make sure to let our rehearsal or events coordinator know. </h2>
        </div>
        <div className='individual-responsibilities'>
          <Responsibilities
            className='volunteers'
            title='volunteers'
            one='1. Stay in contact with rehearsal or event coordinator.'
            two='2. Submit music and sign up for performances 7 days before the first rehearsal for a given blitz.'
            three='3. Singers are required to memorize solo pieces.'
            four='4. Attend 2 mandatory rehearsal and performance.'
            five='5. If you&#39;re sick and contagious, let the rehearsal or event coordinator know.'
          />

          <Responsibilities
            className='accompanist'
            title='accompanist'
            one='1. Stay in contact with rehearsal or event coordinator.'
            two='2. Print music.'
            three='3. Check email for music submissions.'
          />

          <Responsibilities
            className='rehearsal-coordinator'
            title='rehearsal coordinator'
            one='1. Oversee music rehearsal.'
            two='2. Record placement auditions.'
            three='3. Informing members of organization events and changes.'
            four='4. Send rehearsal and performance reminders.'
            five='5. Forward music to accompanists 1 week prior to the first rehearsal.'
            six='6. Request piano parts from performers in need of accompaniment.'
          />
        </div>
        <div className='individual-responsibilities'>
          <Responsibilities
            className='event-coordinator'
            title='event coordinator'
            one='1. Contacts locations to set up performance dates.'
            two='2. Works with Rehearsal Coordinator to ensure all interested performers are signed up on website.'
            three='3. Works with RC to send out rehearsal reminders.'
            four='4. Works with RC to ensure all music has been submitted.'
            five='5. Recruits additional volunteers to fill in program after deadline.'
          />

          <Responsibilities
            className='logistic-team-coordinator'
            title='logistic team coordinator'
            one='1. Foster open communication between members.'
            two='2. Create a weekly meeting agenda.'
            three='3. Preside over weekly meetings.'
            four='4. Maintain and update website.'

          />

          <Responsibilities
            className='publicity-coordinator'
            title='publicity coordinator'
            one='1. The responsiblities of the publicity coordinator is under review.'

          />

        </div>
        <div className="more-info">
          <h3>For more information, email us at operationspreadthemusic@gmail.com</h3>
        </div>

      </div>
    );
  }
});
