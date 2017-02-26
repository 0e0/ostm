import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class Signup extends Component {
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
      <div className="whole-form-page">
      <h1>Performance Sign-up</h1>
      <form className='form' onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
          <label>Full Name </label>
          <input type="text" className="form-control" {...name}/>
          <div className="text-help form-control-label">
            {name.touched ? name.error : ''}
          </div>
        </div>

        <div className={`form-group ${piece.touched && piece.invalid ? 'has-danger' : ''}`}>
          <label>Piece </label>
          <input type="text" className="form-control" {...piece}/>
          <div className="text-help form-control-label">
            {piece.touched ? piece.error : ''}
          </div>
        </div>

        <div className={`form-group ${duration.touched && duration.invalid ? 'has-danger' : ''}`}>
          <label>Duration </label>
          <input type="text" className="form-control" {...duration}/>
          <div className="text-help form-control-label">
            {duration.touched ? duration.error : ''}
          </div>
        </div>

        <div className={`form-group ${date.touched && date.invalid ? 'has-danger' : ''}`}>
          <label>Date </label>
          <select className="date-select" {...date}>
            <option />
            <option>Feb4</option>
            <option>Feb11</option>
            <option>Mar4</option>
            <option>Mar18</option>
            <option>Apr1</option>
            <option>Apr22</option>
          </select>
          <div className="text-help form-control-label">
            {date.touched ? date.error : ''}
          </div>
        </div>

        <button type="submit" className="submit-btn"><h2>Submit</h2></button>
        <button className="cancel-btn"><Link to="/events"><h2>Cancel</h2></Link></button>

      </form>
      </div>
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
}, null, { createPost })(Signup);
