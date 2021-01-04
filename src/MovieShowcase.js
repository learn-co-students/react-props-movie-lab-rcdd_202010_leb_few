import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'


const title = movieData.title;
const IMDBRating = movieData.IMDBRating;
const genres = movieData.genres;
const poster = movieData.poster;

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    
  return movieData.map(movie => 
     <MovieCard title ={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster}/>
  )
    
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
