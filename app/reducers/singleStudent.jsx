import axios from 'axios';

const SELECT_STUDENT = 'SELECT_STUDENT';

export function selectStudent (student) {
  return {
    type: SELECT_STUDENT,
    student
  }
}

export function fetchSingleStudent (id) {
  return function thunk (dispatch) {
    return axios.get(`/api/students/${id}`)
    .then(res => res.data)
    .then(student=> {
      dispatch(selectStudent(student))
    });
  }
}

export default function singleStudent (state = {}, action) {
  switch (action.type) {
    case SELECT_STUDENT:
      return action.student;
    default:
      return state;
  }
}
