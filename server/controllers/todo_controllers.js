const express = require('express');
const bodyParser = require('body-parser');
const Blog = require('../models/blog'); 

const app = express();

// Parse request body as JSON
app.use(bodyParser.json());



const post_blog = (req,res)=>{
  const blog = new Blog(req.body);

  blog.save()
  .then(result =>{
    res.redirect('/');
  })
  .catch(err =>{
    console.log(err);
  })

}

module.exports={
  post_blog

}