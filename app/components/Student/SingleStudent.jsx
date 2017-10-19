import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const SingleStudent = (props) => {

  const studentId = +props.match.params.studentId;

  return (
      <div className="student">
        <div>
        <h3>Name</h3>
        <h5>Campus</h5>
        <p>Info</p>
        </div>
    </div>
    )
  }

function mapStateToProps (state) {
  return {
    students: state.students,
    singleCampus: state.singleCampus
  }
}

export default withRouter(connect(mapStateToProps)(SingleStudent))
