import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchFeb4 } from '../../actions/index';
import { Link } from 'react-router';

class Feb4 extends Component {
  componentWillMount() {
    this.props.fetchFeb4();
  }

  renderFeb4() {
    return this.props.posts.map((post) => {
      console.log(post.name);
      return (
        <li className="performer" key={post._id.$oid}>
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
          <h3>{this.renderFeb4()}</h3>
        </ol>
        <hr/>
        <h3 className="rehearsal-date">Rehearsal Dates | 1-24 & 1-31</h3>
        <Link to="/signup">
          <h1 className="signup">Performance Sign-up</h1>
        </Link>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchFeb4 })(Feb4);
