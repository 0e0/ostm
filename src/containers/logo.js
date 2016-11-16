import React, { Component } from 'react';

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className,
      mission: ''
     };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(props) {
    this.setState({
      mission: this.props.mission,

    });
  }

  render() {
    return (
      <div className='mission'>
      <h6 className='mission-btn'>Mission</h6>
      <h6 className='event-btn'>Events</h6>
      </div>
    );
  }
}

export default Mission;
