const ADD_CAMPUS = 'ADD_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';

export function addCampus (content) {
  return {
    type: ADD_CAMPUS,
    content
  }
}

export function editCampus (content) {
  return {
    type: EDIT_CAMPUS,
    content
  }
}

export default function newCampus (state = '', action) {
  switch (action.type) {
    case ADD_CAMPUS:
      return action.content;
    case EDIT_CAMPUS:
      return action.content;
    default:
      return state;
  }
}
