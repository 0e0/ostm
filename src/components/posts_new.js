import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      // navigate back to index after form is sucessfully submitted
      .then(() => {
        this.context.router.push('/events');
      });
  };

  render() {
    const { fields: { name, piece, duration, date }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Performance Sign-up</h3>
        <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
          <label>Full Name</label>
          <input type="text" className="form-control" {...name}/>
          <div className="text-help form-control-label">
            {name.touched ? name.error : ''}
          </div>
        </div>

        <div className={`form-group ${piece.touched && piece.invalid ? 'has-danger' : ''}`}>
          <label>Piece</label>
          <input type="text" className="form-control" {...piece}/>
          <div className="text-help form-control-label">
            {piece.touched ? piece.error : ''}
          </div>
        </div>

        <div className={`form-group ${duration.touched && duration.invalid ? 'has-danger' : ''}`}>
          <label>Duration</label>
          <input type="text" className="form-control" {...duration}/>
          <div className="text-help form-control-label">
            {duration.touched ? duration.error : ''}
          </div>
        </div>

        <div className={`form-group ${date.touched && date.invalid ? 'has-danger' : ''}`}>
          <label>Date</label>
          <select className="form-control" {...date}>
            <option />
            <option>Feb4</option>
            <option>Feb11</option>
            <option>Mar4</option>
            <option>Mar11</option>
          </select>
          <div className="text-help form-control-label">
            {date.touched ? date.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>

      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter Name';
  }

  if (!values.piece) {
    errors.piece = 'Enter Piece';
  }

  if (!values.duration) {
    errors.duration = 'Enter Piece Duration';
  }

  if (!values.date) {
    errors.date = 'Enter Date';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['name', 'piece', 'duration', 'date'],
  validate
}, null, { createPost })(PostsNew);
