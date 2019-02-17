const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/tech_blog",{useNewUrlParser: true}).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to db",err);
});
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//MONGOOSE MODEL CONFIG
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default:Date.now}
});
var Blog = mongoose.model("Blog",blogSchema);

// ROUTES
app.get("/",function(req,res){
  res.redirect("/blogs");
});
app.get("/blogs",function(req,res){
  Blog.find({},function(err,blogs){
    if(err){
      console.log("Error");
    } else{
      res.render("index",{blogs: blogs});
    }
  })
});

//SHOW ROUTE
app.get("/blogs/:id",function(req,res){
  Blog.findById(req.params.id,function(err,foundBlog){
    if(err){
      res.redirect("/blogs");   //need customization
    } else{
      res.render("show",{blog: foundBlog});
    }
  })
});

app.get("/about",function(req,res){
  res.send("This is the about page");
});

//Categories

app.get("/html",function(req,res){
  res.render("html");
})

//LISTEN
app.listen(8000,process.env.IP,function(){
  console.log("Server has started!!!");
});
