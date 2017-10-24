var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

// Define the pattern of data
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperamnet: String
});

// compile into a model and set to a variable
var Cat = mongoose.model("cat",catSchema);

// adding a new cat to the DB


//retrieve all cats from the DB and console.log each one
