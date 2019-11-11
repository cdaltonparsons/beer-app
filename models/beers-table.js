const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the model for the beers table
const beerSchema = new Schema({
  beerName: { type: String, required: true },
  breweryName: { type: String },
  beerStyle: { type: String },
  tastingNotes: { type: String },
  recommend: { type: Boolean }
});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;
