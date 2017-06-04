module.exports.push= function (event) {
  const line = require('./index')
  var http = require("https");
  var options = {
    "method": "GET",
    "hostname": "api.imgur.com",
    "port": null,
    "path": "/3/album/ITdpx",
    "headers": {
      "authorization": "Client-ID 0c926e905ae8698"
    }
  };
//可以用request libary 有更減變得寫法
  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks)
      //console.log(body.toString());
      body = JSON.parse(body);
      //console.log(body.data.images)

      var linkd = body.data.images[body.data.images.length - 2].link
      var linkd2 = body.data.images[body.data.images.length - 1].link
      //console.log(body.data.images.length)
      console.log(linkd)
      return line.client.replyMessage({
        replyToken: event.replyToken,
        messages: [
          {
            type: "image",
            originalContentUrl: linkd.replace("http", "https"),
            previewImageUrl: linkd.replace("http", "https")
          },
          {
            type: "image",
            originalContentUrl: linkd2.replace("http", "https"),
            previewImageUrl: linkd2.replace("http", "https")
          }
        ]
      }) 
    });
  });
  req.end();
}
module.exports.pushlast = function (event) {
  const line = require('./index')
  var http = require("https");

  var options = {
    "method": "GET",
    "hostname": "api.imgur.com",
    "port": null,
    "path": "/3/album/ITdpx",
    "headers": {
      "authorization": "Client-ID 0c926e905ae8698"
    }
  };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks)
      //console.log(body.toString());
      body = JSON.parse(body);
      //console.log(body.data.images)

      var linkd = body.data.images[body.data.images.length - 4].link
      var linkd2 = body.data.images[body.data.images.length - 3].link
      //console.log(body.data.images.length)
      console.log(linkd)
      return line.client.replyMessage({
        replyToken: event.replyToken,
        messages: [
          {
            type: "image",
            originalContentUrl: linkd.replace("http", "https"),
            previewImageUrl: linkd.replace("http", "https")
          },
          {
            type: "image",
            originalContentUrl: linkd2.replace("http", "https"),
            previewImageUrl: linkd2.replace("http", "https")
          }
        ]
      })
    });
  });

  req.end();
}