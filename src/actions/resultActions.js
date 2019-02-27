import {  
  FETCH_RESULT_SUCCESS  
} from "../constants/actionTypes";

import axios from "axios";

const fetchMoviesSucess = json => {
  return {
    type: FETCH_RESULT_SUCCESS,
    movies: json.results
  };
};

const fetchMovies = () => {
  return dispatch => {    
    axios
      .get("https://cristofer-pipz.free.beeceptor.com/films")
      .then(response => dispatch(fetchMoviesSucess(response.data)));
  };
};

export { fetchMovies };
