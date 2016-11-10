import React, { Component } from 'react';

class Ejerson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ejerson: require('../images/membership/ambassadors/Ejerson.jpg'),
      Faded: 'ejerson',
      Bio: ''
     };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      Faded: 'ejerson-faded',
      Bio: 'I really am super excited about making this website! I created OStM in hopes to provide those involved with the chance to make a difference.'
    });
  }

  handleMouseLeave() {
    this.setState({
      Ejerson: require('../images/membership/ambassadors/Ejerson.jpg'),
      Faded: 'ejerson',
      Bio: ''
    });
  }

  render() {
    return (
      <div className='ejerson-container'>
        <div className='image'>
        <img title={this.state.Title}
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
