## see https://www.twilio.com/blog/2016/11/a-simple-way-to-ocr-images-from-a-url-with-tesseract-js.html

### Tesseract.js is a JavaScript OCR library based on the worlds most popular Optical Character Recognition engine. Its insanely easy to use on both the client-side and on the server with Node.js.

Server side, Tesseract.js only works with local images. But, with a little help from the request Node package, we can download a remote image from a URL and then OCR it with Tesseract.js. 

* Download a remote file with Node
* OCR that local file with Tessearct
* Put the two snippets together
