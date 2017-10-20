import React from 'react';
import { connect } from 'react-redux';
import { postCampus } from '../../reducers/campuses';
import { addCampus, editCampus } from '../../reducers/newCampus';
import history from '../../history';

function NewCampus (props) {
  return (
    <form onSubmit={props.handleSubmit}>
    <h3>Add/Edit Campus</h3>
      <div className="form-group">
        <label htmlFor="name" className="col-xs-2">Name</label>
        <div className="col-xs-10">
        <input value={props.newCampus.name} onChange={props.handleChange} className="form-control" type="text" name="campusName" placeholder="Enter campus name" />
        </div>
      </div>
      <div className="form-group">
      <label htmlFor="info" className="col-xs-2">Info</label>
      <div className="col-xs-10">
      <input value={props.newCampus.info} onChange={props.handleChange} className="form-control" type="text" name="campusInfo" placeholder="Enter info about campus" />
      </div>
    </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Submit</button>
      </div>
    </form>
  );
}

function mapStateToProps (state) {
  return {
    newCampus: state.newCampus,
    campuses: state.campuses
  };
}

function mapDispatchToProps (dispatch) {
  return {
    handleChange: function(event) {
      dispatch(addCampus(event.target.value));
    },
    handleSubmit: function(event) {
      event.preventDefault();
      dispatch(postCampus({ name: event.target.campusName.value, info: event.target.campusInfo.value}));
      dispatch(addCampus(''));
      history.push('/campuses');
    },
    handleEdit: function(event) {
      event.preventDefault();
      dispatch(editCampus({ name: event.target.campusName.value, info: event.target.campusInfo.value}));
      history.push('/campuses');
    }
  };
}

const NewCampusEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewCampus);

export default NewCampusEntryContainer;
