var getHTML = require('./http-functions');
var https = require('https')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

console.log(getHTML(requestOptions, function(html){
  console.log(html)
}))