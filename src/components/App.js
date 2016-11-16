import React, { Component } from 'react';
import { Link } from 'react-router';
import { stack as Menu } from 'react-burger-menu';
import Radium from 'radium';
import { RouteTransition } from 'react-router-transition';

import NavLink from './NavLink';
let RadiumLink = Radium(Link);

export default class App extends Component {
  render() {
    return (
      <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        {this.props.children}

      <div className="landing">

            <div className="arrow-btn-up">
              <Link to="/membership"><h4 className="membership-btn">membership</h4></Link>
              <Link className="arrow" to="/membership"><img src={require('./images/arrow-up.png')} /></Link>
            </div>
            <div className="arrow-btn-right">
                <Link to="/blog"><img src={require("./images/arrow-right.png")} /></Link>
                <Link to="/blog"><h4 className="blog-btn">blog</h4></Link>
            </div>
            <div className="arrow-btn-left">
                <Link to="/media"><img src={require("./images/arrow-left.png")} /></Link>
                <Link to="/media"><h4 className="media-btn">media</h4></Link>
            </div>
            <div id="outer-container">
              <Menu left width={ 280 } outerContainerId={ "outer-container" }>
                <RadiumLink className="bm-item-list" to="/"></RadiumLink>
                <RadiumLink className="bm-item-list" to="/about">About</RadiumLink>
                <RadiumLink className="bm-item-list" to="/join">Join</RadiumLink>
                <RadiumLink className="bm-item-list" to="/events">Events</RadiumLink>
                <RadiumLink className="bm-item-list" to="/blog">Blog</RadiumLink>
                <RadiumLink className="bm-item-list" to="/membership">Membership</RadiumLink>
                <RadiumLink className="bm-item-list" to="/media">Media</RadiumLink>
                <RadiumLink className="bm-item-list" to="/resources">Resources</RadiumLink>
              </Menu>
              {this.props.children}
              </div>
              <div className="mission">
              <h6 className='mission-btn'>Mission</h6>
              <h6 className="events-btn">Events</h6>
              <img className="logo" src={require("./images/logo.png")} />

              </div>
              <div className="arrow-btn-down">
                <Link to="/join"><img src={require("./images/arrow-down.png")} /></Link>
                <Link to="/join"><h4 className="join-btn">join</h4></Link>
              </div>

      </div>
      </RouteTransition>

    );
  }
}
