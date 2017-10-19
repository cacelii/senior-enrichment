import axios from 'axios';

const SELECT_CAMPUS = 'SELECT_CAMPUS';

export function selectCampus (campus) {
  return {
    type: SELECT_CAMPUS,
    campus
  }
}

export function fetchSingleCampus (id) {
  return function thunk (dispatch) {
    return axios.get(`/api/campuses/${id}`)
    .then(res => res.data)
    .then(campus => {
      dispatch(selectCampus(campus))
    });
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
