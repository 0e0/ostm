import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

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
      <div>
        <Link to="/">Back to Posts</Link>
        <button
          onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h1>{post.name}</h1>
        <h1>{post.piece}</h1>
        <h1>{post.duration}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
