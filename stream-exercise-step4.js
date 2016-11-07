'use strict';
var https = require('https')


function getHTML (options, callback) {
  https.get(options, function(response){

    response.setEncoding('utf-8')

    let dataChunk3 = "";

    response.on('data', function(data){
      dataChunk3 += data
    })

    response.on('end', function(){
      callback(dataChunk3)
      console.log("Response stream complete.")
    })
  })
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)