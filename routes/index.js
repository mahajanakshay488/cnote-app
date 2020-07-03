var express = require('express');
var router = express.Router();
var fs = require('fs');

//GET home page. 
router.get('/', function(req, res) {
  fs.readdir('./Upload', function(err , files){
    res.render('index', {file: files , action: ''});
  });

});

//when file closed
router.get('/fileclosed', function(req, res) {
  fs.readdir('./Upload', function(err , files){
    res.render('index', {file: files , action: 'File Closed _'});
  });

});

// Any file is open
router.get('/openfile/:filename' , function(req , res){
  fs.readdir('./Upload', function(err , files){
    var fileAdress = `./Upload/${req.params.filename}`;
    fs.readFile(fileAdress,'utf-8' , function(err , filedata){
      res.render('fileopen', {file: files , filedata: filedata , filename: req.params.filename , action: `${req.params.filename} File Opened _`});
    });
  });
});

router.get('/deletefile/:filename', function(req, res){
  var fileAdress = `./Upload/${req.params.filename}`;
  fs.unlink(fileAdress, function(err){
    res.redirect('/');
  });
});

// any file is saved
router.post('/savefile/:filename' , function(req, res){
  var fileadress = `./Upload/${req.params.filename}`
  fs.writeFile(fileadress , req.body.filedata , function(err){
    fs.readdir('./Upload', function(err , files){
      res.render('index', {file: files , action: `${req.params.filename} File Saved _`});
    });
  });
});

// when file create
router.post('/fileCreation' , function(req, res){
  var fileName = `./Upload/${req.body.fileName}`;
  fs.writeFile(fileName , '' , function(err){
    fs.readdir('./Upload', function(err , files){
      res.render('index', {file: files , action: 'New File Created _'});
    });
  
  });
});



module.exports = router;