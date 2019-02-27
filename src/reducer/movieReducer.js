import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_LOADING
} from "../constants/actionTypes";

const initialState = {
  movies: [],
  isLoading: false
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        isLoading: false
      };
    default:
      return state;
  }
}

export default movieReducer;
