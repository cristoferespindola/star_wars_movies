import {
  FETCH_RESULT,
  FETCH_RESULT_SUCCESS,
  FETCH_RESULT_ERROR,
  CLEAN_RESULT
} from "../constants/actionTypes";

const initialState = {
  movies: []
};

function resultsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RESULT:
      return {
        ...state,
        movies: state.movies
      };
    // case FETCH_RESULT_ERROR:
    //   return {
    //     ...state,
    //     movies: action.movies
    //   };
    case FETCH_RESULT_SUCCESS:
      return {
        ...state,
        movies: action.movies
      };
    default:
      return state;
  }
}

export default resultsReducer;
