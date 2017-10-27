var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

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
    posts:[postSchema] //embed
});

var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     email:"weichien22222@gamil.com",
//     name:"Kevin WeiEEE"
// });

// newUser.posts.push({
//     title:"How to bred postino ddkd",
//     content:"GO EAT SHITEEEEE Ddkddd"
// });

// newUser.save(function(err, user){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// })
///

User.findOne({name:"Kevin WeiEEE"},function(err, user){
    if (err) {
        console.log(err);
    } else{
        user.posts.push({
            title:"349949494 I haae",
            content:"Dkdje,djedie,dedke,dsss!!!!!!!"
        });
        user.save(function(err,user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        })
    }
});






// var newPost = new Post({
//     title:"heyMAnAA",
//     content:"They are delicious"
// })

// newPost.save(function(err,post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })