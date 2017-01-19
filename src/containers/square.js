import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className,
      title: this.props.title,
      content: this.props.content
    }
  }

  render() {
    return (
    <div className={this.props.className}>
      <div><h1>{this.props.title}</h1></div>
      <div>{this.props.content}</div>
    </div>
    );
  }
}
