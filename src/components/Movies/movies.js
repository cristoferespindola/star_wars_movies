import React, { Component } from 'react';
import axios from 'axios';
import Movie from './movie';
import MovieDetails from './movieDetails';
import '../App.css';


export default class Movies extends Component {
    state = {
        movies: [],
        selectedMovie: 0,
        movieIndex: 0
    } 

    handleMovieActive(moveId) {                   
        this.setState({ selectedMovie: moveId })
    }

    componentDidMount() {
        axios.get('https://starwarstest.free.beeceptor.com/films').then(
            response => {
                this.setState({ movies: response.data.results })
            });
    }

    render() {
        if (this.state.movies === undefined) {
            return (
                <div>Loading...</div>
            );
        } else {
            return (
                <div className="ui container">
                    <h1>Star Wars Movie</h1> 
                    <div className="ui secondary pointing menu" >                             
                        {this.state.movies.map(
                            (movie, index) => 
                            <Movie info={movie} 
                                   key={movie.episode_id} 
                                   current={this.state.selectedMovie}
                                   click={() => this.handleMovieActive(movie.episode_id,index)}
                                   />                                
                            )}
                    </div>
                    <div>
                        <MovieDetails info={this.state.movies[this.state.movieIndex]}/>
                    </div>
                </div>
            )
        }
    }
}