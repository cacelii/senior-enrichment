import { combineReducers } from 'redux'
import campuses from './campuses';
import students from './students';
import singleCampus from './singleCampus';
import newStudent from './newStudent';
import newCampus from './newCampus';

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

const rootReducer = combineReducers(
  {
    campuses,
    students,
    singleCampus,
    newStudent,
    newCampus
  }
)

export default rootReducer;

// export * from './campuses';
// export * from './students';
// export * from './newCampus';
// export * from './newStudent';
