import React, { Component } from "react";
import Movie from "./movie";
import MovieDetails from "./movieDetails";
import { fetchMovies } from "../../actions/resultActions";
import { connect } from "react-redux";

class Movies extends Component {
  handleMovieActive(moveId) {
    this.setState({ selectedMovie: moveId });
  }

  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <div className="ui container">
        <h1>Star Wars Movie</h1>
        <div className="ui cards">
          {movies.map((movie, index) => (
            <Movie info={movie} key={index} />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  movies: state.movies
});
const mapDispatchToProps = dispatch => ({
  fetchMovies: searchTerm => dispatch(fetchMovies(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
