import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const SingleCampus = (props) => {

  const campusId = +props.match.params.campusId;
  const studentId = +props.match.params.studentId;
  const filteredStudents = props.students.filter(student => student.campusId === campusId);
  console.log(props.singleCampus);

  return (
      <div className="campus">
        <div>
        <h3>{props.singleCampus.name} Campus</h3>
        <ol>
        {
          filteredStudents.map(student => {
            return (
              <li key={student.id}><NavLink to={`/campuses/${campusId}/${student.name}`} activeClassName="active">{student.name}</NavLink></li>
            )
          })
        }
        </ol>
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

export default withRouter(connect(mapStateToProps)(SingleCampus))
