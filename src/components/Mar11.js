import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchMar11 } from '../actions/index';
import { Link } from 'react-router';

class Mar11 extends Component {
  componentWillMount() {
    this.props.fetchMar11();
  }

  renderMar11() {
    return this.props.posts.map((post) => {
      console.log(post.name);
      return (
        <li key={post._id.$oid}>
          <Link to={"/posts/" + post._id.$oid}>
          <strong>{post.name} |</strong>
          <span> {post.piece}</span>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ol>
          <h3>{this.renderMar11()}</h3>
        </ol>
        <hr/>
        <h3 className="rehearsal-date">Rehearsal Dates | 2-28 & 3-7</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchMar11 })(Mar11);
