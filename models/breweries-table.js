const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the model for the breweries table
const brewerySchema = new Schema({
  breweryName: { type: String, required: true },
  beerName: { type: String },
  location: { type: String },
  recommend: { type: Boolean }
});

const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = Brewery;
