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
    var searchInput = req.query.search; // set a input variable
    var url = "http://www.omdbapi.com/?s=";    
    request(url + searchInput + "&apikey=thewdb",function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body); // parse body from strings to JSON
            res.render("results",{data:data});
        }
    })
})


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("connecting!");
})