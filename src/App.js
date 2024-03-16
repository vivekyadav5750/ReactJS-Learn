import React from "react";
import MovieList from "./MovieList.js";
import Navbar from "./Navbar.js";
import {movies} from "./moviesData";

class App extends React.Component{
  constructor() {
    super();
    //Creating the state object
    this.state = {
      movies : movies,
      cartCount: 0,
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
      let {movies, cartCount} = this.state;
      const index = movies.indexOf(movie);

      movies[index].isInCart = !movies[index].isInCart;
      const addCart = movies[index].isInCart;

      // if (addCart) {
      //   this.setState({cartCount: cartCount + 1}, () => { this.setState({ movies})}
      //   );
      // }
      // else {
      //   this.setState({cartCount: cartCount - 1}, () => { this.setState({ movies})}
      //   );
      // }

      // OR
      
      if (addCart) {
        cartCount = cartCount + 1;
      }
      else {
        cartCount = cartCount - 1;
      }
      
      this.setState({movies, cartCount});     //update and re-render the component
          
    }

  render() {
    const {movies, cartCount} = this.state;
    return (
      <>
        <Navbar count = {cartCount} />
        <MovieList movies={movies}
                    handleAddStars={this.handleAddStars}
                    handleDecStars = {this.handleDecStars}
                    handleFav = {this.handleFav}
                    handleCart = {this.handleCart}
                  />
      </>
    )
  }
  
}

export default App;
