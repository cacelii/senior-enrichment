import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const Campuses = (props) => (
  <div className="container-fluid">
    <div className="col-xs-10">
      <div className="row">
      {
        props.campuses.map(campus => {
          return (
            <div key={campus.id} className="col-xs-4">
            <NavLink to={`/campuses/${campus.id}`} activeClassName="active">
                <img src={campus.image} />
                <div className="caption">
                <h5>
                  <span>{campus.name} Campus</span>
                </h5>
                </div>
              </NavLink>
            </div>
          )
        })
      }
      </div>
    </div>
  </div>
);

function mapStateToProps (state) {
  return {
    campuses: state.campuses,
    students: state.students,
    singleCampus: state.singleCampus
  }
}

export default withRouter(connect(mapStateToProps)(Campuses))
