import React, { Component } from 'react';
import { Link } from 'react-router';
import { stack as Menu } from 'react-burger-menu';
import Radium from 'radium';

import NavLink from './NavLink';
let RadiumLink = Radium(Link);


export default class App extends Component {
  render() {
    return (
      <div className="header">
            <div className="arrow-btn-up">
              <Link to="/membership"><h4 className="membership-btn">membership</h4></Link>
              <Link to="/membership"><img src={require("./arrow-up.png")} /></Link>
            </div>
            <div className="arrow-btn-right">
                <Link to="/blog"><img src={require("./arrow-right.png")} /></Link>
                <Link to="/blog"><h4 className="blog-btn">blog</h4></Link>
            </div>
            <div className="arrow-btn-left">
                <Link to="/media"><img src={require("./arrow-left.png")} /></Link>
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
              <div>
          <img className="logo" src={'https://photos-6.dropbox.com/t/2/AADXOCY4GN8Jn7wsoIAkxyvt9rjuHKWcO4JzFXMUnl_MxQ/12/589216228/png/32x32/1/_/1/2/final.png/EPm5uN8EGJ7ADiACKAI/kNmC-3jsIiLH3trzu6HXoCRA8bJeqCUlHATyJZa84nU?size=1280x960&size_mode=3'} />
            <div className="arrow-btn-down">
                <Link to="/join"><img src={require("./arrow-down.png")} /></Link>
                <Link to="/join"><h4 className="join-btn">join</h4></Link>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
