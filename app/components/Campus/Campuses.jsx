import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteCampus } from '../../reducers/campuses';

const Campuses = (props) => (
  <div className="container-fluid">
    <div className="col-xs-10">
    <button><NavLink to="/campuses/addCampus" activeClassName="active">Add Campus</NavLink></button>
    <button><NavLink to="/campuses/editCampus" activeClassName="active">Edit Campus</NavLink></button>
    <table className='table'>
    <thead>
      <tr>
        <th>Campuses</th>
      </tr>
    </thead>
    <tbody>
      {
        props.campuses && props.campuses.map(campus => (
          <tr key={campus.id}>
            <td>{campus.id}</td>
            <td><NavLink to={`/campuses/${campus.id}`} activeClassName="active">{ campus.name }</NavLink></td>
            <td>{ campus.campusId }</td>
            <td><button className="btn btn-default btn-xs" onClick={() => props.deleteCampus(campus.id)}>x</button></td>
            </tr>
        ))
      }
    </tbody>
  </table>
    </div>
  </div>
);

function mapStateToProps (state) {
  return {
    campuses: state.campuses,
    singleCampus: state.singleCampus
  }
}

const mapDispatchToProps = ({
  deleteCampus});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Campuses))
