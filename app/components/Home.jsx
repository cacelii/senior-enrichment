import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const Home = (props) => (
  <div className="home">
    <div className="container-fluid">
      <div className="col-xs-10">
      <h2><strong>Javascript Academy</strong></h2>
      <h1><small>where you can learn all the javascript your heart desires</small></h1>
      <div className="row">
      {
        props.campuses.map(campus => {
          return (
            <div key={campus.id} className="col-xs-6">
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
  </div>
);

function mapStateToProps (state) {
  return {
    campuses: state.campuses
  }
}

export default withRouter(connect(mapStateToProps)(Home));
