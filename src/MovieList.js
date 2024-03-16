// import {Component} from "react";

import MovieCard from "./Moviecard";


// class MovieList extends Component {
function MovieList(props) {
  // render() {
    const {movies, handleAddStars, handleDecStars, handleCart, handleFav} = props;
    return (
      <>
        {movies.map((movie) => (
            <MovieCard 
              movies = {movie} 
              addStars={handleAddStars}
              decStars = {handleDecStars}
              handleFav = {handleFav}
              handleCart = {handleCart}
              key = {movie.id}
              
            />
        ))
        }
      </>
    )
  }
// }

export default MovieList;


