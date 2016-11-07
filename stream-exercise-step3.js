'use strict';
var https = require('https')

function getAndPrintHTML (options) {
  var url = "https://" + options['host'] + options ['path']


  https.get(url, function(response){

    response.setEncoding('utf-8')
    let dataChunk = "";

    response.on('data', function(data){
      dataChunk += data
    })

    response.on('end', function(){
        console.log("This is the buffered data: " + dataChunk3)
        console.log("Response stream complete.")
    })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

console.log(getAndPrintHTML(requestOptions))