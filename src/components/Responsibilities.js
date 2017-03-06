import React from 'react';
import { Link } from 'react-router';


import Responsibilities from '../containers/individual-responsibility';

export default React.createClass({
  render() {
    return (
      <div className='responsibilities'>
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
            one='1. Stay in contact with rehearsals or event coordinator.'
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

          />

        </div>
        <div className="more-info">
          <h3>For more information, email us at operationspreadthemusic@gmail.com</h3>
        </div>

      </div>
    );
  }
});
