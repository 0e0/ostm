import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchMay20 } from '../../actions/index';
import { Link } from 'react-router';

class May20 extends Component {
  componentWillMount() {
    this.props.fetchMay20();
  }

  renderMay20() {
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
          <h3>{this.renderMay20()}</h3>
        </ol>
        <hr/>
        <h3 className="rehearsal-date">Rehearsal Dates | 5-9 & 5-16</h3>
        <h3 className="rehearsal-date">Accompanist | Seth</h3>
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

export default connect(mapStateToProps, { fetchMay20 })(May20);
