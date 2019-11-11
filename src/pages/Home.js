import React from "react";

const btnStyle = {
  marginLeft: 10
};

function Home() {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Welcome to **beer app title here**</h1>
      <h3>Keep track of your favorite beers and breweries</h3>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Your Favorite Beers
        </a>
        <a
          className="btn btn-warning btn-lg"
          href="#"
          role="button"
          style={btnStyle}
        >
          Your Favorite Breweries
        </a>
      </p>
      <hr className="my-4" />
      <p>Start by signing up or logging in below</p>
      <p className="lead">
        <a className="btn btn-info btn-lg" href="#" role="button">
          Sign Up
        </a>
        <a
          className="btn btn-success btn-lg"
          href="#"
          role="button"
          style={btnStyle}
        >
          Log In
        </a>
      </p>
    </div>
  );
}

export default Home;
