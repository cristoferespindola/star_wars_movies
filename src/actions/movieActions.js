import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_LOADING
} from "../constants/actionTypes";

import axios from "axios";

const fetchMoviesLoading = () => {
  return {
    type: FETCH_MOVIES_LOADING
  };
};

const fetchMoviesSucess = json => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies: json.results
  };
};

const fetchMovies = () => {
  return dispatch => {
    dispatch(fetchMoviesLoading());
    axios
      .get("https://swapi.co/api/films/?format=json")
      .then(response => dispatch(fetchMoviesSucess(response.data)));
  };
};

export { fetchMovies };
