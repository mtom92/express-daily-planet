let express = require('express');
let layouts = require('express-ejs-layouts');
let app = express();
app.set('view engine' , 'ejs');
app.use(layouts);
app.use(express.urlencoded({ extended:false })) //this makes post forms work !!

app.use('/',require('./controllers/articles'));


app.get('/', (req,res)=>{
  res.render('site/home')
});

app.get('/about', (req,res)=>{
  res.render('site/about')
});

app.get('/contact', (req,res)=>{
  res.render('site/contact')
});



app.listen(3000);
