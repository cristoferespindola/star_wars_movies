import { FETCH_MOVIES_SUCCESS } from "../constants/actionTypes";

const initialState = {
  movies: []
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies
      };
    default:
      return state;
  }
}

export default movieReducer;
