'use strict';

var express = require('express');
var controller = require('./hotel.controller');

var router = express.Router();
var multer = require('multer');
var path   = require('path')
/*
Multer image upload config
*/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
});
const fileFilter = (req, file, cb) => { 
  //accept image only
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
var upload = multer({
   storage: storage, 
   fileFilter: fileFilter,
   limits:{
        fileSize: 500 * 1024, // Let 500 KB (max file size)
    },
    onError : function(err, next) {
        console.log('error', err);
        next(err);
      }  
 });
 

//app.get('/', (req, res) => {
 // res.sendFile(__dirname + '/index.html');
//});

// It's very crucial that the file name matches the name attribute in your html
router.post('/newhotel', upload.single('file-to-upload'), (req, res) => {
  //File Uploaded successfully
  console.log(req.file);
  // TODO: Save 'req.file.path' to DB
  res.redirect('back');
});
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/UserEmail/:UserEmail', controller.showid);
module.exports = router;
