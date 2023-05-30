const express = require('express');
const app = express();
const morgan = require('morgan');
const Routes = require('./routes/todo_routes');

const mongoose = require('mongoose');

// const dbURI = "mongodb+srv://Sakyasekhar:sakyasekhar@chatapp.mlveze6.mongodb.net/?retryWrites=true&w=majority"; 
 
const dbURI = "mongodb://localhost:27017";
mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err))


app.set('view engine','ejs');

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// task routes
app.use('/', Routes);



// app.use((req, res) => {  //fires for every single request|| functions invocs only if express dont find any url matchs above
//   res.status(404).render('404', { title: '404' });
// });