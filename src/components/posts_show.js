import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

// <button
//   onClick={this.onDeleteClick.bind(this)}>
//   Delete Post
// </button>

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  };

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/events');
      });
  };

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div className="signup-info">
        <Link to="/events"><button className='cancel-btn'>Back to events</button></Link>

        <h1>Full Name | {post.name}</h1>
        <h1>Title | {post.piece}</h1>
        <h1>Duration | {post.duration}</h1>
        <h1>Accompaniment | {post.accompanist}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
