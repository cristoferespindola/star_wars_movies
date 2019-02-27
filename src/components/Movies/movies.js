import React, { Component } from 'react';
import Movie from './Movie/movie';
import { fetchMovies } from '../../actions/resultActions';
import { connect } from 'react-redux';
import { Segment, Image, Container } from 'semantic-ui-react';
import logo from '../../assets/img/starWars-logo.png';
import '../App.css';

//Generate stars
const numStars = 1000;

for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");  
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + 'px';
  star.style.left = xy[1] + 'px';
  document.body.append(star);
}
function getRandomPosition() {  
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random()*x);
  var randomY = Math.floor(Math.random()*y);
  return [randomX,randomY];
}
class Movies extends Component {  

  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  render() {
    const { movies } = this.props;
    return (
      <Container className="master">
        <Image src={ logo } size='medium' wrapped />        
          <Segment>
            {movies.map((movie, index) => (
              <Movie info={movie} key={index} />
            ))}         
          </Segment>
      </Container>
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
