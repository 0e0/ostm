import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchApr22 } from '../../actions/index';
import { Link } from 'react-router';

class Apr22 extends Component {
  componentWillMount() {
    this.props.fetchApr22();
  }

  renderApr22() {
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
          <h3>{this.renderApr22()}</h3>
        </ol>
        <hr/>
        <h3 className="rehearsal-date">Rehearsal Dates | 3-11 & 3-18</h3>
        <h3 className="rehearsal-date">Accompanist | David</h3>
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

export default connect(mapStateToProps, { fetchApr22 })(Apr22);
