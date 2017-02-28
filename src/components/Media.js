import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {

    return (
      <div className='text'>

            <div>
              <h1>media</h1>
              <Link to="/"><img src={require('./images/home-button.png')} /></Link>
            <div className='photos'>
              <img className='one' src={require('./images/media/1.jpg')} />
              <img className='two' src={require('./images/media/2.jpg')} />
              <img className='three' src={require('./images/media/3.jpg')} />
              <img className='four' src={require('./images/media/4.jpg')} />
              <img className='five' src={require('./images/media/5.jpg')} />
              <img className='six' src={require('./images/media/6.jpg')} />
              <img className='seven' src={require('./images/media/7.jpg')} />
              <img className='eight' src={require('./images/media/8.jpg')} />
              <img className='nine' src={require('./images/media/9.jpg')} />
          </div>
          <div className="more-info">
          <h3>For more information, feel free to email us at operationspreadthemusic@gmail.com</h3>
          </div>
          </div>

        </div>
    );
  }
});
