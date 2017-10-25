var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

// Define the pattern of data
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperamnet: String
});

// compile into a model and set to a variable
var Cat = mongoose.model("Cat",catSchema);

// adding a new cat to the DB
var kevin = new Cat({
    name:"Peter",
    age:21,
    temperamnet:"Fatty"
});

kevin.save(function(error,cat){
    if(error){
        console.log("Something went WRONG!");
    } else{
        console.log("We Just Saved a cat to the DB");
        console.log(cat);
    }
}); 

// cat is sent by database!!!! // Kevin is from JavaScript

Cat.create({
    name:"Now WW",
    age:13,
    temperamnet:"Bland"
},function(err, cat){
    if(err){
        console.log(err);
    } else{
        console.log(cat);
    }
})

//retrieve all cats from the DB and console.log each one
Cat.find({},function(err, cats){
    if(err){
        console.log(err);
    } else{
        console.log(cats);
    }
})