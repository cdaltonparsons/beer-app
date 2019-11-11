const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the model for the breweries table
const brewerySchema = new Schema({

});

const Brewery = mongoose.model("Brewery", brewerySchema);

module.exports = Brewery;