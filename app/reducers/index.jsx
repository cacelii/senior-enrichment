import { combineReducers } from 'redux'
import campuses from './campuses';
import students from './students';
import singleCampus from './singleCampus';
import singleStudent from './singleStudent';
import newStudent from './newStudent';
import newCampus from './newCampus';

const rootReducer = combineReducers(
  {
    campuses,
    students,
    singleCampus,
    singleStudent,
    newStudent,
    newCampus
  }
)

export default rootReducer;
