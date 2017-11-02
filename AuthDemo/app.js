var express = require("express");
var app = express();
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("home");
});

app.get("/secret",function(req, res){
    res.render("secret");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("connect!");
})