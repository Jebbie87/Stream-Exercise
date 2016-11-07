var https = require('https')

function getHTML (options, callback) {
  /* Add your code here */
  https.get(options, function(response){

    response.setEncoding('utf-8')

    response.on('data', function(data){

      const dataChunk3 = [];
      dataChunk3.push("This is the const buffered data: ", data)

      response.on('end', function(){
        printHTML(data)
        console.log("Response stream complete.")
      })
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





