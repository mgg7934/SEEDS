// routes/api/articles.js
// CODE WAS MADE THROUGH HELP OF SEVERAL STACKOVERFLOW THREADS AS WELL AS HELP FROM OTHER STUDENTS
// Code was not specifcally written on my own @Sanjeel Nath

const express = require('express');
const router = express.Router();

// Load Article model
const Article = require('../../models/Article');

// @route GET api/articles/test
// @description tests articles route
// @access Public
router.get('/test', (req, res) => res.send('article route testing!'));

// @route GET api/articles
// @description Get all articles
// @access Public
router.get('/', (req, res) => {
    Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(404).json({ noarticlesfound: 'No Articles are found' }));
});
router.get('/filter', async (req, res) => {
   
    var year=req.query.year
    var author=req.query.author


    if(author=="" && year!="")
    {
        Article.find({ "Strength of claim": {$regex:year}}  )
        .then(articles => res.json(articles))
        .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
    }


    else if(author!="" && year==""){
        Article.find({ "SE Practice": {$regex:author} }  )
        .then(articles => res.json(articles))
        .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
    }
    else if(author!="" && year!=""){

        Article.find({ $and: [ {"SE Practice": {$regex:author} },{"Strength of claim": {$regex:year}} ] }   )
        .then(articles => res.json(articles))
        .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));

      

    }
    else{
        Article.find()
        .then(articles => res.json(articles))
        .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
    }
    
  
    
        
 });
// @route GET api/articles/:id
// @description Get single articles by id
// @access Public
router.get('/:id', (req, res) => {
    Article.findById(req.params.id)
        .then(articles => res.json(articles))
        .catch(err => res.status(404).json({ noarticlesfound: 'No Article found' }));
});

// @route GET api/articles
// @description add/save articles
// @access Public
router.post('/', (req, res) => {
    Article.create(req.body)
        .then(articles => res.json({ msg: 'Book added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});

// @route GET api/articles/:id
// @description Update articles
// @access Public
router.put('/:id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body)
        .then(articles=> res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/articles/:id
// @description Delete articles by id
// @access Public
router.delete('/:id', (req, res) => {
    Article.findByIdAndRemove(req.params.id, req.body)
        .then(articles => res.json({ mgs: 'Article entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such a articles' }));
});

module.exports = router;
