import React, { Component } from "react";
import Movie from "../Movie/movie";
import Loading from "../Loading/loading";
import { fetchMovies } from "../../actions/movieActions";
import { connect } from "react-redux";

import logo from "../../assets/img/starWars-logo.png";
import { Segment, Image, Container } from "semantic-ui-react";
import "../App.css";

//Generate stars
for (let i = 0; i < 1000; i++) {
  const star = document.createElement("div");
  const xy = getRandomPosition();

  star.className = "star";
  star.style.top = xy[0] + "px";
  star.style.left = xy[1] + "px";

  document.body.append(star);
}

function getRandomPosition() {
  const y = window.innerWidth;
  const x = window.innerHeight;

  const randomX = Math.floor(Math.random() * x);
  const randomY = Math.floor(Math.random() * y);

  return [randomX, randomY];
}

class Movies extends Component {
  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  render() {
    const { movies, isLoading } = this.props;

    if (isLoading) {
      return <Loading />;
    } else {
      return (
        <Container className="master">
          <Image src={logo} size="medium" wrapped />
          <Segment>
            {movies.map((movie, index) => (
              <Movie info={movie} key={index} />
            ))}
          </Segment>
        </Container>
      );
    }
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  isLoading: state.isLoading
});
const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
