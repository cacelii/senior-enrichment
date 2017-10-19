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

    return (
        <div className="campus">
          <div>
          <h3>{this.props.singleCampus.name} Campus</h3>
          <img src={this.props.singleCampus.image} />
          <h4>{this.props.singleCampus.info}</h4>
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
  }

function mapStateToProps (state) {
  return {
    students: state.students,
    singleCampus: state.singleCampus
  }
}

const mapDispatchToProps = ({fetchSingleCampus});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCampus))
