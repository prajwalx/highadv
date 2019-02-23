'use strict';

var express = require('express');
var controller = require('./hotel.controller');

var router = express.Router();
var multer = require('multer');
var upload = multer({
 dest: 'uploads/' // this saves your file into a directory called "uploads"
});

var app = express();

//app.get('/', (req, res) => {
 // res.sendFile(__dirname + '/index.html');
//});

// It's very crucial that the file name matches the name attribute in your html
app.get('/newhotel', upload.single('file-to-upload'), (req, res) => {
console.log("saved");
 res.redirect('/newhotel');
});
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/UserEmail/:UserEmail', controller.showid);
module.exports = router;
