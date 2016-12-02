// https://www.twilio.com/blog/2016/11/a-simple-way-to-ocr-images-from-a-url-with-tesseract-js.html

"use strict";

var Tesseract = require('tesseract.js')
var request = require('request')
var fs = require('fs')
var url = 'http://tesseract.projectnaptha.com/img/eng_bw.png'
var filename = 'data/pic.png'
 
var writeFile = fs.createWriteStream(filename)
 
request(url).pipe(writeFile).on('close', function() {
  console.log(url, 'saved to', filename)
  Tesseract.recognize(filename)
    .progress(function  (p) { console.log('progress', p)  })
    .catch(err => console.error(err))
    .then(function (result) {
      console.log(result.text)
      process.exit(0)
    })
});

