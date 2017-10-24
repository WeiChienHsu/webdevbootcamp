var express = require("express");
var app = express();
var request = require("request");

app.use(express.static("public"));
app.set("view engine","ejs");

//ROUTE Search page (send to search) - > use element input.name
app.get("/",function(req, res){
    res.render("search");
})

//ROUTE Results page (Get the information from api)
app.get("/results",function(req, res){
    var data;
    res.render("results",{data:data});
    console.log("req.query");
})


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("connecting!");
})