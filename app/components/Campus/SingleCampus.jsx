import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchSingleCampus } from '../../reducers/singleCampus';

class SingleCampus extends Component {

  componentDidMount() {
    const campusId = +this.props.match.params.campusId;
    this.props.fetchSingleCampus(campusId);
  }

  render() {
    const campusId = +this.props.match.params.campusId;
    const filteredStudents = this.props.students.filter(student => student.campusId === campusId);
    const {name, image, info} = this.props.singleCampus;

    return (
        <div className="campus">
          <div>
          <h2><strong>{name} Campus</strong></h2>
          <img src={image} />
          <h4>{info}</h4>
          <ol>
          {
            filteredStudents.map(student => {
              return (
                <li key={student.id}><NavLink to={`/campuses/${campusId}/${student.id}`} activeClassName="active">{student.name}</NavLink></li>
              )
            })
          }
          </ol>
          </div>
      </div>
      )

  }
  }

function mapStateToProps (state) {
  return {
    students: state.students,
    singleCampus: state.singleCampus
  }
}

const mapDispatchToProps = ({fetchSingleCampus});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCampus))
