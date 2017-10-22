var request = require("request");
request('http://reddit.com', function(error, respond, body){
    if(error){
        console.log(error);
    } else{
        console.log(body);
        }
});