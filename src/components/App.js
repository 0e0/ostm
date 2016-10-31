import React, { Component } from 'react';
import { Link } from 'react-router';
import { stack as Menu } from 'react-burger-menu';
import Radium from 'radium';

import NavLink from './NavLink';
let RadiumLink = Radium(Link);


export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="title">Operation Spread the Music</h1>
        </div>
        <div id="outer-container">
          <Menu left width={ 280 } outerContainerId={ "outer-container" }>
            <RadiumLink className="bm-item-list" to="/"></RadiumLink>
            <RadiumLink className="bm-item-list" to="/about">About</RadiumLink>
            <RadiumLink className="bm-item-list" to="/join">Join</RadiumLink>
            <RadiumLink className="bm-item-list" to="/events">Events</RadiumLink>
            <RadiumLink className="bm-item-list" to="/resources">Resources</RadiumLink>
          </Menu>
          {this.props.children}

          <div className="footer">
          <div>
            <h2>I really need to time myself so I do not forget to eat or exercise.</h2>
          </div>
            <h1>I am a footer!</h1>
          </div>

        </div>
      </div>

    );
  }
}
