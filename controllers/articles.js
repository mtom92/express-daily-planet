let express = require('express');
//let db = require('../models')
let router = express.Router();
let db = require('../models')


//renders all the articles
router.get('/articles', (req,res)=>{
   db.articles.findAll()
    .then((article)=>{
      res.render('articles/index',{ article })
    })
       .catch((err)=>{
        console.log('err',err)
        res.render('404')
      })
});

//post the created article
router.post('/articles',(req,res)=>{
  console.log(req.body)
  db.articles.create(req.body)
  .then((article)=>{
    res.redirect('/articles/' + article.id)
  })
  .catch((err)=>{
    console.log('error',err)
    res.render('404')
  })
});

//shows the form to create a new article
router.get('/articles/new', (req,res)=>{
  res.render('articles/new')
});



//show individual articles
router.get('/articles/:id',(req,res)=>{
  db.articles.findByPk(req.params.id)
  .then((article) =>{
    res.render('articles/show',{
      article:article
    })
  })
  .catch((err)=>{
    console.log('error',err)
    res.render('404')
  })
})


module.exports = router;
