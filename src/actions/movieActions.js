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
      .get("https://swapi.co/api/films/?format=json")
      .then(response => dispatch(fetchMoviesSucess(response.data)));
  };
};

export { fetchMovies };
