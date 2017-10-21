var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("main");
})

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server is connecting!");
})