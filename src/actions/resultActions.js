import {
  FETCH_RESULT,
  FETCH_RESULT_SUCCESS
  // FETCH_RESULT_ERROR
} from "../constants/actionTypes";

import axios from "axios";

const fetchResult = searchTerm => {
  return {
    type: FETCH_RESULT
  };
};

const fetchMoviesSucess = json => {
  return {
    type: FETCH_RESULT_SUCCESS,
    movies: json.results
  };
};

// const fetchMoviesError = () => {
//   return {
//     type: FETCH_RESULT_ERROR,
//     movies: []
//   };
// };

const fetchMovies = searchTerm => {
  return dispatch => {
    dispatch(fetchResult(searchTerm));
    axios
      .get("https://cristofer-pipz.free.beeceptor.com/films")
      .then(response => dispatch(fetchMoviesSucess(response.data)));
  };
};

export { fetchMovies };
