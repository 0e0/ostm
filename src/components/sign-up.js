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
    const { fields: { name, piece, duration, accompanist, date }, handleSubmit } = this.props;

    return (
      <div className="whole-form-page">
      <h1 className="performance-signup-title">Performance Sign-up</h1>
      <form className='form' onSubmit={handleSubmit(this.onSubmit.bind(this))}>

        <div className={`form-group ${name.touched && name.invalid ? 'has-danger' : ''}`}>
          <div>
            <label>Full Name </label>
          </div>
          <div>
            <input type="text" className="form-control" {...name}/>
              <div className="text-help form-control-label">
                {name.touched ? name.error : ''}
              </div>
          </div>
        </div>

        <div className={`form-group ${piece.touched && piece.invalid ? 'has-danger' : ''}`}>
          <div>
          <label>Piece </label>
          </div>
          <div>
          <input type="text" className="form-control" {...piece}/>
          <div className="text-help form-control-label">
            {piece.touched ? piece.error : ''}
          </div>
          </div>
        </div>

        <div className={`form-group ${duration.touched && duration.invalid ? 'has-danger' : ''}`}>
          <div>
            <label>Duration </label>
          </div>
          <div>
            <input type="text" className="form-control" {...duration}/>
            <div className="text-help form-control-label">
              {duration.touched ? duration.error : ''}
            </div>
          </div>
        </div>

        <div className={`form-group ${accompanist.touched && accompanist.invalid ? 'has-danger' : ''}`}>
          <div>
            <label>*Accompanist </label>
          </div>
          <div>
            <select className="date-select" {...accompanist}>
              <option />
              <option>yes</option>
              <option>no</option>
            </select>
            <div className="text-help form-control-label">
              {accompanist.touched ? accompanist.error : ''}
            </div>
          </div>
        </div>

        <div className={`form-group ${date.touched && date.invalid ? 'has-danger' : ''}`}>
          <div>
            <label>Date </label>
          </div>
          <div>
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
        </div>

          <div className='important-btn'>
          <button type="submit" className="submit-btn"><h2>Submit</h2></button>
          <button className="cancel-btn"><Link to="/events"><h2>Cancel</h2></Link></button>
          <h3 className="accompanist-message">*if you indicated yes in the accompanist option, please email your music to operationspreadthemusic@gmail.com a week before the first scheduled rehearsal.</h3>
        </div>
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

  if (!values.accompanist) {
    errors.accompanist = 'Need Accompaniment?';
  }

  if (!values.date) {
    errors.date = 'Enter Date';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['name', 'piece', 'duration', 'accompanist', 'date'],
  validate
}, null, { createPost })(Signup);
