import React, { Component } from 'react';

class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textClass: this.props.textClass,
      className: this.props.className,
      Name: this.props.name,
      Image: this.props.image,
      Faded: 'member',
      Bio: ''
     };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

  }

  handleMouseEnter(props) {
    this.setState({
      Faded: 'member-faded',
      Bio: this.props.bio
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
      <div className={this.props.className}>
        <img
          className={this.state.Faded}
          onMouseOver={this.handleMouseEnter}
          onMouseOut={this.handleMouseLeave}
          src={this.state.Image}/>
          <div
          className={this.props.textClass}
          onMouseOver={this.handleMouseEnter}
          onMouseOut={this.handleMouseLeave}
          >
          <p>{this.state.Bio}</p>
          </div>
      </div>

    );
  }
}

export default Bio;
