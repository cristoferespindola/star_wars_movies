import {  
  FETCH_RESULT_SUCCESS 
} from "../constants/actionTypes";

const initialState = {
  movies: []
};

function resultsReducer(state = initialState, action) {
  switch (action.type) {    
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
