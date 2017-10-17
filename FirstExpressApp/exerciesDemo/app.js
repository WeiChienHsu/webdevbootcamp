var express = require("express");
var app = express();

//ROUTE -> "/"
app.get("/",function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

//ROUTE -> "/speak"
app.get("/speak/:name",function(req, res){
    var call ={
        "pig":'Oink',
        "cow":'Moo',
        "dog":'Woof Woof!',
    }
    var name = req.params.name;
    res.send("the "+name+" says '" + call[name] +"'"+'"')
});

//ROUTE -> "/repeat"
app.get("/repeat/:name/:id",function(req, res){
    
    function print(word,num){
        var res = []; 
        for( var i = 0; i<num; i++){
            res.push(word);
        }
        return res.join(" ");
    }
    res.send(print(req.params.name,req.params.id));
})

//ROUTE error
app.get('*', function(req, res){
    res.send("sorry. The web don't find.")
})

//listen to the port
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is connecting!")
})