
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

      //

      var dataChunk = [];
      let dataChunk2 = [];
      const dataChunk3 = [];
      // dataChunk.push("This is the var buffered data: ", data)
      // dataChunk2.push("This is the let buffered data: ", data)
      dataChunk3.push("This is the const buffered data: ", data)

      dataChunk3.forEach(function(data){
        console.log(data)
      })
    })

  })

}

console.log(getAndPrintHTML())