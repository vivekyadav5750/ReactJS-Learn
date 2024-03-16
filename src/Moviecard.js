// import React from "react";

// class MovieCard extends React.Component {
function MovieCard(props) {
  // addStars = () => {
  //   if (this.state.star >= 5) return;
  //   //1st form
  //   // this.setState({star: this.state.star + 1});
  //   //callback function
  //   this.setState({ star: this.state.star + 1 }, () =>
  //     console.log("star added")
  //   );

  //   //2nd form
  //   // this.setState((prevState) => {
  //   //     return {
  //   //         star: prevState.star + 1
  //   //     }
  //   // });

  //   // this.state.star = this.state.star + 1;
  //   // console.log(this.state.star);
  // };

  // handleFav = () => {
  //   console.log("Favourite", this.state.fav);
  //   this.setState({ fav: !this.state.fav });
  // };


  // render() {
    // const { title, plot, price, rating, star,fav, isInCart } = this.state;
    // const {movies: data} = this.props;      // Destructuring the props (rename the props to data)
    // console.log(data);
    
    const {movies, addStars, decStars, handleFav, handleCart} = props;      // Destructuring the props
    const { title, plot,poster, price, rating, star,fav, isInCart } = movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src= {poster}
              />
          </div>

          <div className="right">
            <div className="title"> {title}</div>
            <div className="plot"> {plot}</div>
            <div className="price">Rs. {price}</div>

            <div className="footer">
              <div className="rating">{rating} </div>
              <div className="star-dis">
                <img
                  alt="decrease"
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                  onClick={() => decStars(movies)}
                />

                <img
                  alt="star"
                  className="stars"
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                />

                <img
                  alt="increase"
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  // onClick={this.addStars.bind(this)}
                  onClick={() => addStars(movies)}
                />
                <span className="startCount">{star}</span>
              </div>

              {/* {this.state.fav ? 
                (<button className="favourite-btn" onClick={this.handleFav}> Favourite </button>) : 
                (<button className="unfavourite-btn" onClick={this.handleFav}> Un-favourite </button>)
                } */}

            <button className={fav? "unfavourite-btn" : "favourite-btn"} onClick={() => handleFav(movies)}> {fav ? "Un-favourite": "Favourite"} </button>

              {/* <button className="cart-btn">Add to cart</button> */}
                <button className={isInCart ? "uncart-btn" : "cart-btn"} onClick={() => handleCart(movies)}> {isInCart ? "Remove from  Cart" : "Add to Cart"}</button>

            </div>
          </div>
        </div>
      </div>
    );
  }


export default MovieCard;


