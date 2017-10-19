const ADD_STUDENT = 'ADD_STUDENT';

export function addStudent (content) {
  return {
    type: ADD_STUDENT,
    content
  }
}

export default function newStudent (state = '', action) {
  switch (action.type) {
    case ADD_STUDENT:
      return action.content;
    default:
      return state;
  }
}
