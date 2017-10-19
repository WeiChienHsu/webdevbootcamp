var express = require("express");
var app = express();

//ROUTE
app.get("/",function(req, res){
    res.render("home.ejs");
})

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs",{thingVar:thing});
    console.log(thing);
})

app.get("/posts/",function(req, res){
    var posts = [
        {title: "Post 1", author:"Kevin"},
        {title: "My adorable pet bunny", author:"Susan"},
        {title: "Can you believe this car", author:"Kitty"},
        ];
        
        res.render("posts.ejs",{posts:posts});
})

app.get("*", function(req, res){
    res.send("There is something wrong!");
})

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("server is listening"); 
});

