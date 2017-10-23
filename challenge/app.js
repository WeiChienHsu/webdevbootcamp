var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//set to read EJS
app.set("view engine","ejs");
// let the request body read the code
app.use(bodyParser.urlencoded({extended:true}));
// adding css file
app.use(express.static("public"));

// ROUTE main page
app.get("/",function(req, res){
   res.render("main");     
});

//Temporary save all datas
var checks = ["Wash the dish","Clear the table"];

// ROUTE check page
app.get("/check",function(req, res){
    res.render("check",{checks:checks});
})

//ROUTE for posting REQUEST from check page
app.post("/addCheckList",function(req, res){
    var newCheck = req.body.checklist;
    checks.push(newCheck);
    res.redirect("/check");
})

//Listen to server
app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server is connecting");
})