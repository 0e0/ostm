import React, { Component } from 'react';

class Amanda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Ejerson: require('../images/membership-image/ambassadors/hannah.jpg'),
      Faded: 'member',
      Bio: ''
     };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      Faded: 'member-faded',
      Bio: 'Hannah Hopper, coordinator and performer in OStM, joined the organization partly in memory of her late great-grandparents, who passed away from Alzheimer’s and who greatly enjoyed having someone come sing to them. She believes people with a love for making others smile will find a great place in OStM.'
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
          onMouseOver={this.handleMouseEnter}
          onMouseOut={this.handleMouseLeave}
          >
          <p>{this.state.Bio}</p>
          </div>
      </div>

    );
  }
}

export default Amanda;
