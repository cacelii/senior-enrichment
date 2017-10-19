import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import history from '../../history';
import { deleteStudent } from '../../reducers/students';

function Students (props) {

    return (
      <div>
      <button><NavLink to="/students/addStudent" activeClassName="active">Add Student</NavLink></button>
      <table className='table'>
      <thead>
        <tr>
          <th>StudentId</th>
          <th>Name</th>
          <th>Campus</th>
        </tr>
      </thead>
      <tbody>
        {
          props.students && props.students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td><NavLink to={`/students/${student.id}`} activeClassName="active">{ student.name }</NavLink></td>
              <td>{ student.campusId }</td>
              <td><button className="btn btn-default btn-xs" onClick={props.deleteStudent}>x</button></td>
              </tr>
          ))
        }
      </tbody>
    </table>
    </div>
    );
}

function mapStateToProps (state) {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteStudent: function(event) {
      event.preventDefault();
      dispatch(deleteStudent());
      history.push('/students');
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Students))
