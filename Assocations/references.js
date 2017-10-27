var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo2");

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post",postSchema);


//USER - email name
var userSchema = new mongoose.Schema({
    email:String,
    name:String,
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }]
});

var User = mongoose.model("User", userSchema);

// User.create({
//     email:"bob@gmail.com",
//     name:"Bob"
// });

// Post.create({
//     title:"How to coolddududududud",
//     content:"findout a chef and pay dafasdfadsfasd !"
// },function(err,post){
//     if(err){
//         console.log(err);
//     } else {
//         User.findOne({email:"bob@gmail.com"}, function(err, foundUser){
//             if (!err){
//                 foundUser.posts.push(post);
//                 foundUser.save(function(err, data){
//                     if(!err){
//                         console.log(data);
//                     }
//                 })
//             }
//         })
//     }
// })

// Find User
User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(err, user){
    if(!err){
        console.log(user);
    }
});

// Find all posts for that user