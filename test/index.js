var push = require('./test.js');
var express = require('express');
const app = express();
var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('App now running on port',port);
})
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
  console.log(req)
  test.reply(req, res);
});

