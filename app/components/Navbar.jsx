import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import history from '../history';

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
});

export default withRouter(connect(mapProps, mapDispatch)(Navbar));

