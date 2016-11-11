import React, { Component } from 'react';

class Ejerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ejerson: require('../images/membership-image/ambassadors/Ejerson.jpg'),
      Faded: 'member',
      Bio: ''
     };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      Faded: 'member-faded',
      Bio: 'I really am super excited about making this website! I created OStM in hopes to provide those involved with the chance to make a difference.'
    });
  }

  handleMouseLeave() {
    this.setState({
      Faded: 'member-picked',
      Bio: ''
    });
  }

  render() {
    return (
      <div className='member-container'>
        <div className='image'>
        <img
          className={this.state.Faded}
          onMouseOver={this.handleMouseEnter}
          onMouseOut={this.handleMouseLeave}
          src={this.state.Ejerson}/>
          <p
            onMouseOver={this.handleMouseEnter}
          className='text'>{this.state.Bio}</p>
        </div>
      </div>

    );
  }
}

export default Ejerson;
