import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

function Navbar () {

    return (
        <div className="container">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
              <NavLink to="/campuses" activeClassName="active">Campuses</NavLink>
            </li>
              <li>
                <NavLink to="/students" activeClassName="active">Students</NavLink>
              </li>
            </ul>
          </div>
    );
}

/* -----------------    CONTAINER     ------------------ */

export default withRouter(connect()(Navbar));

