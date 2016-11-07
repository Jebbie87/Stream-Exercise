var https = require('https')

function getAndPrintHTML (options) {
  var url = "https://" + options['host'] + options ['path']

  /* Add your code here */
  https.get(url, function(response){

    response.setEncoding('utf-8')

    response.on('data', function(data){

      const dataChunk3 = [];

      dataChunk3.push("This is the const buffered data: ", data)

      dataChunk3.forEach(function(data){
        console.log(data)
      })
    })
  })
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

console.log(getAndPrintHTML(requestOptions))