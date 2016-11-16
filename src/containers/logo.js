import React, { Component } from 'react';

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: 'mission',
      mission: 'show-logo'
     };

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(props) {
    this.setState({
      className: 'mission-dim',
      mission: 'hide-logo'
    });
  }

  render() {
    return (
      <div className={this.state.className}>
      <h6 className='mission-statement'>Musicians on a mission to provide a channel for human connection
      through musical outreach.</h6>
      </div>
    );
  }
}

export default Mission;
