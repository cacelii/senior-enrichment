import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from './history';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Campuses from './components/Campus/Campuses';
import SingleCampus from './components/Campus/SingleCampus';
import SingleCampusStudent from './components/Campus/SingleCampusStudent';
import Students from './components/Student/Students';
import SingleStudent from './components/Student/SingleStudent';
import NewStudent from './components/Student/NewStudent';
import { fetchCampuses } from './reducers/campuses';
import { fetchStudents } from './reducers/students';

/* -----------------    COMPONENT     ------------------ */

class Routes extends Component {

  componentDidMount () {
    this.props.fetchInitialData();
  }

  render () {
    return (
      <Router history={history}>
        <div>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/campuses" component={Campuses} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/students/addStudent" component={NewStudent}/>
            <Route exact path="/campuses/:campusId" component={SingleCampus} />
            <Route path="/campuses/:campusId/:studentId" component={SingleCampusStudent} />
            <Route path="/students/:studentId" component={SingleStudent}/>
            <Route component={Home} />
          </Switch>
          </div>
      </Router>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses());
    dispatch(fetchStudents());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
