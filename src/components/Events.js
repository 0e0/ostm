import React from 'react';
import Square from '../containers/square.js';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className='text'>
      <h1>events</h1>
      <Link to="/"><img src={require('./images/home-button.png')} /></Link>
      <h2>Rehearsals are held every Tuesday from 5:45 pm to 8:00 pm in Good Samaritan Creative Arts Room</h2>
        <div>
          <Square
            className="event"
            title="February 4, 2017"
            content="West Blitz"
          />

          <Square
            className="event"
            title="February 11, 2017"
            content="East Blitz"
          />
          <Square
            className="event"
            title="March 4, 2017"
            content="West Blitz"
          />

          <Square
            className="event"
            title="March 11, 2017"
            content="East Blitz"
          />
          <Square
            className="event"
            title="April 1, 2017"
            content="West Blitz"
          />

          <Square
            className="event"
            title="April 8, 2017"
            content="East Blitz"
          />
          <Square
            className="event"
            title="May 8, 2017"
            content="TBA"
          />


        </div>
      </div>
    );
  }
});
