import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchFeb11 } from '../actions/index';
import { Link } from 'react-router';

class Feb11 extends Component {
  componentWillMount() {
    this.props.fetchFeb11();
  }

  renderFeb11() {
    return this.props.posts.map((post) => {
      console.log(post.name);
      return (
        <li key={post._id.$oid}>
          <Link to={"/posts/" + post._id.$oid}>
          <strong>{post.name}</strong>
          <span>{post.piece}</span>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ol>
          {this.renderFeb11()}
        </ol>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchFeb11 })(Feb11);
