import React, { Component } from 'react';

export default class Responsibilities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className,
      title: this.props.title,
      one: this.props.one,
      two: this.props.two,
      three: this.props.three,
      four: this.props.four,
      five: this.props.five,
      six: this.props.six,
    }
  }

  render() {
    return (
    <div className={this.props.className}>
      <h2>{this.props.title}</h2>
      <h3>{this.props.one}</h3>
      <h3>{this.props.two}</h3>
      <h3>{this.props.three}</h3>
      <h3>{this.props.four}</h3>
      <h3>{this.props.five}</h3>
      <h3>{this.props.six}</h3>
    </div>
    );
  }
}
