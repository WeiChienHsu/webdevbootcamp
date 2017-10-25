var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat-data");

var catSchema = new mongoose.Schema({
    name:String,
    age:Number,
    nickName:String,
});

var Cat = mongoose.model("Cat",catSchema);

var Kitty = new Cat({
    name:"Kitty",
    age:25,
    nickName:"PikaChu",
});

Kitty.save(function(err, cat){
    if(!err){
        console.log("saved cat data");
    }
});

