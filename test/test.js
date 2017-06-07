var rp = require('request-promise');
var request = require('request');
const bodyParser = require('body-parser');
var http = require("https");
const API_URL = `https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/46d04fde-70a3-4507-aec8-98869e189ea0?subscription-key=727cb238c1244bc4b2abf5a0a378553c&timezoneOffset=0&verbose=true&q=`
/*var Record = mongoose.model('Record', {
  time: Number,
  userid: String,
  text: String
});*/

exports.reply = function justReply(req, res) {
  const promises = req.body.events.map(event => {

    const queryUrl = `${API_URL}${encodeURIComponent(event.message.text)}`;
    request({ uri: queryUrl, encoding: null, }, function (error, response, body) {
      if (response.statusCode === 200) {
        body = JSON.parse(body);
        const { intent } = body.topScoringIntent;
        if (intent === 'None') {
          var lineReply_options = {
            method: 'POST',
            uri: "https://api.line.me/v2/bot/message/reply",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Authorization": 'Bearer c/XMmaPokDjHzMTNmPed0Mjtf3UZ8S/9+tTB08iIELrmaP5vydkuPLQVPMat1cfVV4H4dfFph4sc1S91OSOg8PWmSg1JbGIyXP7WJvZ1e2X3LJ0zCdKQsk4OS0QkCzlvVY3GqF8UOPa6hGJixR99KgdB04t89/1O/w1cDnyilFU='
            },
            json: true,
            body: {
              replyToken: reply_token,
              messages: [
                {
                  type: 'text',
                  text: '你好, 我是施恩堂小幫手，還再學習怎麼跟人類對話，可以和我聊天。\n\n輸入『週報(傳送)』本週週報\n輸入『上週週報(傳送)』上週週報\n輸入『講道(傳送)』講道影音'
                }
              ]
            }
          };
          return rp(lineReply_options);
        } else {
          if (event.message.text) {
            let isMatch = false;
            Object.keys(data.DATA).forEach((prop) => {
              if (isMatch) {
                return;
              }
              isMatch = event.message.text.indexOf(prop) >= 0;
              if (isMatch) {
                matchProp = prop;
              } else {
                matchProp = '恩典';
              }
            })

            const randItems = {};
            const randSet = data.DATA[matchProp];
            const randKeys = Object.keys(randSet);
            const randStart = parseInt((Math.random() * randKeys.length));
            const itemKey = randKeys[randStart];
            const title = randSet[itemKey].title;
            randItems[title] = randSet[itemKey];
            var lineReply_options = {
              method: 'POST',
              uri: "https://api.line.me/v2/bot/message/reply",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": 'Bearer c/XMmaPokDjHzMTNmPed0Mjtf3UZ8S/9+tTB08iIELrmaP5vydkuPLQVPMat1cfVV4H4dfFph4sc1S91OSOg8PWmSg1JbGIyXP7WJvZ1e2X3LJ0zCdKQsk4OS0QkCzlvVY3GqF8UOPa6hGJixR99KgdB04t89/1O/w1cDnyilFU='
              },
              json: true,
              body: {
                replyToken: reply_token,
                messages: [
                  {
                    "type": "template",
                    "altText": "電腦版看不到",
                    "template": {
                      "type": "buttons",
                      "thumbnailImageUrl": randItems[title].image_url,
                      "title": "我能理解您的心情，推薦這首歌給您",
                      "text": randItems[title].title,
                      "actions": [

                        {
                          "type": "uri",
                          "label": "聽歌",
                          "uri": randItems[title].item_url
                        }
                      ]
                    }
                  }

                  , {
                    type: 'text',
                    text: '喜樂的心乃是良藥，憂傷的靈使骨枯乾。(箴言17:22)'
                  }
                ]
              }
            };
            return rp(lineReply_options);

          }
        }
      } else {
        console.log('oops');
      }

    });

  });
    





Promise
  .all(promises)
  .catch(function (err) {
    console.log(err);
  })
  .then(() => res.json({ success: true }));

};
