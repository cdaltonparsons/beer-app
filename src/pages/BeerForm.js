import React, { Component } from "react";

class Beerform extends Component {
  state = {
    // state will go here
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // this function will take user input from the html form and create an entry into the database
  };

  // will likely need a few more functions, build out here when needed

  render() {
    return (
      <>
        <div className="jumbotron">
          <h1 className="display-3">
            Keep track of your favorite (or least favorite...) beers here
          </h1>
          <p class="lead">
            Fill in the form below to save beers to your profile.
          </p>
        </div>
        <div className="row">
            <div className="col-md-8">
        <form>
          <fieldset>
            <legend>New Beer</legend>
            <div className="form-group">
              <label for="overallRating">Overall Rating</label>
              <select class="form-control" id="overallRating">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div className="form-group">
              <label className="col-form-label" for="beerName">
                Name of Beer
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Name of Beer"
                id="beerName"
              />
            </div>
            <div className="form-group">
              <label className="col-form-label" for="breweryName">
                Brewery Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Brewery Name"
                id="breweryName"
              />
            </div>
            <div className="form-group">
              <label className="col-form-label" for="beerStyle">
                Beer Style
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Beer Style"
                id="beerStyle"
              />
            </div>
            <div className="form-group">
              <label for="tastingNotes">Enter tasting notes here</label>
              <textarea
                className="form-control"
                id="tastingNotes"
                rows="3"
              ></textarea>
            </div>
          </fieldset>
        </form>
        </div>
        </div>
      </>
    );
  }
}

export default Beerform;
