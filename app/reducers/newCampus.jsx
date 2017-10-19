const ADD_CAMPUS = 'ADD_CAMPUS';

export function addCampus (content) {
  return {
    type: ADD_CAMPUS,
    content
  }
}

export default function newCampus (state = '', action) {
  switch (action.type) {
    case ADD_CAMPUS:
      return action.content;
    default:
      return state;
  }
}
