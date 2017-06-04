var push = require('./push.js');
var express = require('express');
const app = express();
var server = app.listen(process.env.PORT || 8081, function(){
  var port = server.address().port;
  console.log('App now running on port',port);
})
app.get('/push', (req, res) => {
  res.status(200).send('Hello, world!');
  push.push('tony');
});
push.push('tony');
