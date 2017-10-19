import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';

export function getCampuses (campuses) {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

export function getCampus (campus) {
  return {
    type: GET_CAMPUS,
    campus
  }
}

export function fetchCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => {
      dispatch(getCampuses(campuses))
    });
  }
}

export function postCampus (campus) {

    return function thunk (dispatch) {
      return axios.post('/api/campuses/addCampus', campus)
        .then(res => res.data)
        .then(newCampus => {
          const action = getCampus(newCampus);
          dispatch(action);
        });
    }
  }

  export function deleteCampus (id) {

        return function thunk (dispatch) {
          axios.delete(`/api/campuses/${id}`)
          .then(() => dispatch(fetchCampuses()));
        }
  }

export default function campuses (state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case GET_CAMPUS:
      return [...state, action.campus];
    default:
      return state;
  }
}
