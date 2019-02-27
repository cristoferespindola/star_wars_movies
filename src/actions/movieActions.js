import { FETCH_MOVIES_SUCCESS } from "../constants/actionTypes";

import axios from "axios";

const fetchMoviesSucess = json => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies: json.results
  };
};

const fetchMovies = () => {
  return dispatch => {
    axios
      .get("https://starsagain.free.beeceptor.com/films")
      .then(response => dispatch(fetchMoviesSucess(response.data)));
  };
};

export { fetchMovies };
