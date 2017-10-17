var express = require("express");
var app = express();

app.get("/",function(req, res){
    res.send("hey");
})



app.get("/r/:subredditName/comments/:id/:title",function(req, res){
    res.send("Welcome to a " + req.params.subredditName +" page!");
});

app.get("*", function(req, res){
    res.send("There's something wrong");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is connecting!");
});