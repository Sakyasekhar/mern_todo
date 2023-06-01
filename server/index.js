const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const Blog = require('./models/blog'); 

const mongoose = require('mongoose');

app.use(bodyParser.json());

const dbURI = "mongodb+srv://Sakyasekhar:sakyasekhar@chatapp.mlveze6.mongodb.net/?retryWrites=true&w=majority"; 
 
// const dbURI = "mongodb://localhost:27017";
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(
  result => {console.log('server connected with db')}
)
.catch(err => console.log(err));






// app.use('/', Routes);
app.post('/create',async(req,res)=>{

  console.log("hii");
  console.log(req.body)
  const {title,author } = req.body;
  let newUser = new Blog({
    title,author
  })
  
  await newUser.save();
  
});

app.listen(8080, (err) => {
  if (err) throw err;
  console.log('okk')
});



