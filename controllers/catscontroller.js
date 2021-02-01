const express = require('express');
const router = express.Router();
const cat = require('../models/cat');

//route for reading all cats
router.get("/", function(req, res) {
    cat.selectAll(function(data) {
      if (err) {
        return res.status(500).end();
      }
      //for handlebars
      res.render("index", {cats : data});
      //res.sendFile(path.join(_dirname, "./views/index.handlebars"))
    }) 
});

//route for creating a cat
router.post('/api/cats', function(req, res) {

})

//route for updating cats 'petted' condiiton
router.put('/api/cats/:id' , function(req, res) {
  cat.InsertOne(function(data){
    if (err) {
      return res.status(500).end();
    }
    res.render("index", {cats : data});
  })
  //var catName = req.params.id; 
  //update boolean to be 1 (true)
})




//route for adding
router.post('', function(req, res) {

})


module.exports = router