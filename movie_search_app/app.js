var express = require("express");
var app = express();
var request = require("request");
app.set("view engine","ejs");

//ROUTE - Search
app.get("/",function(req, res){
    res.render("search");
})

//ROUTE - Results
app.get("/results",function(req, res){
   var query = req.query.search;
   var url = "http://www.omdbapi.com/?s=";
   request(url + query + "&apikey=thewdb", function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("result",{data:data});
        }       
   });

    
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Movie App has started!!");
})