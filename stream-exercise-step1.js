// setting the require doesn't matter where it is in the code, i believe

var https = require('https');

function getAndPrintHTMLChunks () {

  // var https = require('https');
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  /* Add your code here */

https.get(requestOptions, function(response){


  response.setEncoding('utf-8');


  response.on('data', function(data){
    console.log(data + '\n')
  })

  response.on('end', function(){
    console.log("Response stream complete.")
  })

  // return data
})
}

console.log(getAndPrintHTMLChunks())