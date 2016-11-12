import React, { Component } from 'react';

class Amanda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ejerson: require('../images/membership-image/ambassadors/Amanda.jpg'),
      Faded: 'member',
      Bio: ''
     };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

  }

  handleMouseEnter() {
    this.setState({
      Faded: 'member-faded',
      Bio: 'Amanda Peñaloza joined OStM after Christmas caroling in a nursing home and seeing the impact it made on the residents. She acts as a coordinator and performer for the group, and encourages anyone looking for a way to make an impact on their community to join.'
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
      <div className='amanda-container'>
        <img
          className={this.state.Faded}
          onMouseOver={this.handleMouseEnter}
          onMouseOut={this.handleMouseLeave}
          src={this.state.Ejerson}/>
          <div
          className='amanda-text'
          onMouseOver={this.handleMouseEnter}>
            <p>{this.state.Bio}</p>
          </div>
      </div>

    );
  }
}

export default Amanda;
