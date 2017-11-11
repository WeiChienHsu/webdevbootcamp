var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo2");

var Post = require("./models/post");
var User = require("./models/user");

// User.create({
//     email:"bob@gmail.com",
//     name:"Bob"
// });

Post.create({
    title:"How to ABCDEFGDHDLD:ED:KELDDDD",
    content:"DDDDDDDDDDDDDDJLWJLEKDJWL:DJW:LKJDK:LDJ:LKWLKJW:LKJDd"
},function(err,post){
    if(err){
        console.log(err);
    } else {
        User.findOne({email:"bob@gmail.com"}, function(err, foundUser){
            if (!err){
                foundUser.posts.push(post);
                foundUser.save(function(err, data){
                    if(!err){
                        console.log(data);
                    }
                })
            }
        })
    }
})

// Find User
User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(err, user){
    if(!err){
        console.log(user);
    }
});

// Find all posts for that user