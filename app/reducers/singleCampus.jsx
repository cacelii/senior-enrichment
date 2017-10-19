const SELECT_CAMPUS = 'SELECT_CAMPUS';

export function selectCampus (campus) {
  return {
    type: SELECT_CAMPUS,
    campus
  }
}

export default function singleCampus (state = {}, action) {
  switch (action.type) {
    case SELECT_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
