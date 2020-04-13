const express = require('express') ;
const path = require('path') ;
const hbs = require('hbs') ;


const app = express() ;
app.set('view engine', 'hbs') ;
app.set('views', path.join(__dirname, "./views")) ;
hbs.registerPartials(path.join(__dirname, "./views/includes/")) ;
app.use(express.static("public"));



app.get('/', (req, res)=>{
  res.render('template.hbs', {

  }) ;
}) ;



app.listen(3007, ()=>{
  console.log("The server is listening on port 3007") ;
}) ;











