var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

//ROUTE
app.get("/",function(req, res){
    res.render("home");
})

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love",{thingVar:thing});
    console.log(thing);
})

app.get("/posts/",function(req, res){
    var posts = [
        {title: "Post 1", author:"Kevin"},
        {title: "My adorable pet bunny", author:"Susan"},
        {title: "Can you believe this car", author:"Kitty"},
        ];
        
        res.render("posts",{posts:posts});
})

app.get("*", function(req, res){
    res.send("There is something wrong!");
})

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("server is listening"); 
});

