import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT'


export function getStudents (students) {
  return {
    type: GET_STUDENTS,
    students
  }
}

export function getStudent (student) {
  return {
    type: GET_STUDENT,
    student
  }
}

export function removeStudent () {
  return {
    type: REMOVE_STUDENT
  }
}

export function fetchStudents () {

  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        dispatch(getStudents(students));
      });
  }
}

export function postStudent (student) {

  return function thunk (dispatch) {
    return axios.post('/api/students/addStudent', student)
      .then(res => res.data)
      .then(newStudent => {
        const action = getStudent(newStudent);
        dispatch(action);
      });
  }
}

export function deleteStudent () {

    return function thunk (dispatch) {
      dispatch(removeStudent())
      axios.delete('/api/students')
    }
  }

export default function students(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case GET_STUDENT:
      return [...state, action.student];
    default:
      return state;
  }
}
