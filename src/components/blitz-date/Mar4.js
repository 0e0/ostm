import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchMar4 } from '../../actions/index';
import { Link } from 'react-router';

class Mar4 extends Component {
  componentWillMount() {
    this.props.fetchMar4();
  }

  renderMar4() {
    return this.props.posts.map((post) => {
      console.log(post);
      return (
        <li key={post._id.$oid}>
          <Link to={"posts/" + post._id.$oid}>
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
          <h3>{this.renderMar4()}</h3>
        </ol>
        <hr/>
        <h3 className="rehearsal-date">Rehearsal Dates | 2-21 & 2-28</h3>
        <h3 className="rehearsal-date">Accompanist | Charlotte</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchMar4 })(Mar4);
