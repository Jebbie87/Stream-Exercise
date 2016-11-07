'use strict';

var https = require('https')

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */

  https.get(requestOptions, function(response){

    response.setEncoding('utf-8')

    response.on('data', function(data){

      var dataChunk = [];
      dataChunk.push("This is the buffered data: ", data)

      dataChunk.forEach(function(data){
        console.log(data)
      })

    })
  })
}

console.log(getAndPrintHTML())