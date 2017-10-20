import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchSingleStudent } from '../../reducers/singleStudent';

class SingleStudent extends Component {

  componentDidMount() {
    const studentId = +this.props.match.params.studentId;
    this.props.fetchSingleStudent(studentId);
  }

  render() {
    const {name, email, campus} = this.props.singleStudent;
    return (
        <div className="student">
          <div>
          <h2><strong>{name}</strong></h2>
          <h3>{ campus ? campus.name + ' Campus' : null }</h3>
          <h4>{email}</h4>
          </div>
      </div>
      )
  }
}

function mapStateToProps (state) {
  return {
    students: state.students,
    singleStudent: state.singleStudent
  }
}

const mapDispatchToProps = ({fetchSingleStudent});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent))
