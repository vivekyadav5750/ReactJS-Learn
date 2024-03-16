import {Component} from "react";

import MovieCard from "./Moviecard";

class MovieList extends Component {
  constructor() {
    super();
    //Creating the state object
    this.state = {
      movies : [
          {
            id:1,
            title: 'The Avengers',                  
            plot:
              "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
            poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
            rating: '8.0',            
            price: 99,            
            star: 0,
            fav: false,
            isInCart: false                  
          },
          {
            id:2,
            title: 'The Dark Knight',                  
            plot:
              'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
            poster:
            'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
            rating: '9.0',            
            price: 199,            
            star: 0,            
            fav: false,
            isInCart: false                  
          },
          {
            id:3,
            title: 'Iron Man',                 
            plot:
              'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
            poster:
              'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
            rating: '7.9',            
            price: 139,            
            star: 0,            
            fav: false,
            isInCart: false                  
          }]
      };

    }

    handleAddStars = (movie) => {
      const {movies} = this.state;
      const index = movies.indexOf(movie);

      if (movies[index].star < 5) 
        movies[index].star += 1;
      
      this.setState({         //update and re-render the component
        movies
    });
    }

    handleDecStars = (movie) => {
      const {movies} = this.state;
      const index = movies.indexOf(movie);

      if (movies[index].star > 0) 
        movies[index].star -= 1;
      
      this.setState({         //update and re-render the component
        movies
    });
    }

    handleFav = (movie) => {
      const {movies} = this.state;
      const index = movies.indexOf(movie);

      movies[index].fav = !movies[index].fav;
      
      this.setState({         //update and re-render the component
        movies
    });
    }

    handleCart = (movie) => {
      const {movies} = this.state;
      const index = movies.indexOf(movie);

      movies[index].isInCart = !movies[index].isInCart;
      
      this.setState({         //update and re-render the component
        movies
    });
    }

  render() {
    const {movies} = this.state;
    return (
      <>
        {movies.map((movie) => (
            <MovieCard 
              movies = {movie} 
              addStars={this.handleAddStars}
              decStars = {this.handleDecStars}
              handleFav = {this.handleFav}
              handleCart = {this.handleCart}
              key = {movie.id}
              
            />
        ))}
      </>
    )
  }
}

export default MovieList;

