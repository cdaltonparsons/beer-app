import React from "react";

const btnStyle = {
    marginLeft: 10
}

function Home() {
    return (
<div class="jumbotron">
  <h1 class="display-3">Welcome to **beer app title here**</h1>
  <h3>Keep track of your favorite beers and breweries</h3>
  <p class="lead">
  <a class="btn btn-primary btn-lg" href="#" role="button">Your Favorite Beers</a>
  <a class="btn btn-warning btn-lg" href="#" role="button" style={btnStyle}>Your Favorite Breweries</a></p>
  <hr class="my-4"/>
  <p>Start by signing up or logging in below</p>
  <p class="lead">
    <a class="btn btn-info btn-lg" href="#" role="button">Sign Up</a>
    <a class="btn btn-success btn-lg" href="#" role="button" style={btnStyle}>Log In</a>
  </p>
</div>
    );
};

export default Home;