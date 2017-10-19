import React from 'react';
import { connect } from 'react-redux';
import { postStudent } from '../../reducers/students';
import { addStudent } from '../../reducers/newStudent';
import history from '../../history';


function NewStudent (props) {
  return (
    <form onSubmit={props.handleSubmit}>
    <h3>Add Person</h3>
      <div className="form-group">
        <label htmlFor="name" className="col-xs-2">Name</label>
        <div className="col-xs-10">
        <input value={props.newStudent} onChange={props.handleChange} className="form-control" type="text" name="studentName" placeholder="Enter student name" />
        </div>
      </div>
      <div className="form-group">
      <label htmlFor="email" className="col-xs-2">Email</label>
      <div className="col-xs-10">
      <input value={props.newStudent} onChange={props.handleChange} className="form-control" type="text" name="studentEmail" placeholder="Enter email" />
      </div>
    </div>
      <div className="form-group">
      <label htmlFor="campus" className="col-xs-2 control-label">Select Campus</label>
      <div className="col-xs-10">
        <select className="form-control" name="campus" onChange={props.handleChange}>
        {
          props.campuses.map(campus => {
            return (
              <option key={campus.id} value={campus.id}>{campus.name}</option>
            )
          })
        }
        </select>
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
    newStudent: state.newStudent,
    campuses: state.campuses
  };
}

function mapDispatchToProps (dispatch) {
  return {
    handleChange: function(event) {
      dispatch(addStudent(event.target.value));
    },
    handleSubmit: function(event) {
      event.preventDefault();
      dispatch(postStudent({ name: event.target.studentName.value, email: event.target.studentEmail.value, campus: event.target.campus.value }));
      dispatch(addStudent(''));
      history.push('/students');
    }
  };
}

const NewStudentEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewStudent);

export default NewStudentEntryContainer;
