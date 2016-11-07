module.exports = function getHTML (options, callback) {
    var https = require('https')
    https.get(options, function(response){

    response.setEncoding('utf-8')


    let dataChunk = "";
    response.on('data', function(data){
      dataChunk += data;
    })

    response.on('end', function(){
      callback(dataChunk)
      console.log("Response stream complete.")
    })
  })
};