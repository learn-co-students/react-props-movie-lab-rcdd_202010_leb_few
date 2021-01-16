import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((ele, idx) => <MovieCard title={ele.title} IMDBRating={ele.IMDBRating} poster={ele.poster} genres={ele.genres}/>);
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
