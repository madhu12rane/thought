var express = require('express');
var app = express();

app.get('/',function(request,response){
  response.sendFile('/index.html',{root:'.'});
});

var port= 8080;

app.listen(port,function(request,response){
 console.log("web app running at http://localhost:"+port);
});