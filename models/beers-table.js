const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the model for the beers table
const beerSchema = new Schema({

});

const Beer = mongoose.model("Beer", beerSchema);

module.exports = Beer;