var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req, res){
    res.render("main");
})

var friends = ["Kevin","Tom","Peter","Molley"];

//show friend lists
app.get("/friends",function(req, res){
    res.render("friends",{friends:friends});
});

app.post("/addFriend",function(req, res){
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends"); // run a code in /friends
})

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server is connecting!");
})