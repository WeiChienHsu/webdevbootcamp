var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
//ROUTE TO MAIN PAGE
app.get("/", function(req, res){
    res.render("main");
});

   var num1, num2;
   var check = [ ];
   var returnVals= ({num1: num1, num2: num2 , check: check}); 

//ROUTE TO CHECK PAGE
app.get("/check",function(req, res){

   res.render("check",returnVals); 
});

app.post("/checkResult",function(req, res){
    var firstNum = req.body.num1
    var secondNum = req.body.num2
    var sum = parseInt(firstNum) + parseInt(secondNum);
    
    check.push(firstNum);
    check.push(secondNum);
    check.push(sum);
    console.log(check);
    res.redirect("/check");
})

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("server is connecting!");
})