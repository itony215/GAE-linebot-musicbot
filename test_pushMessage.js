'use strict'
const line = require('./index')

// init with auth token
line.init({
  accessToken: 'c/XMmaPokDjHzMTNmPed0Mjtf3UZ8S/9+tTB08iIELrmaP5vydkuPLQVPMat1cfVV4H4dfFph4sc1S91OSOg8PWmSg1JbGIyXP7WJvZ1e2X3LJ0zCdKQsk4OS0QkCzlvVY3GqF8UOPa6hGJixR99KgdB04t89/1O/w1cDnyilFU=',
  // (Optional) for webhook signature validation
  channelSecret: '22fc220ce651793e6b4a546b028a230a'
})

line.client
  .pushMessage({
    to: 'U98eb646573a9793f8e9142078f2969df',
    messages:[
        {
            "type":"text",
            "text":"Hello, world1"
      }, {
        "type": "template",
        "altText": "this is a buttons template",
        "template": {
          "type": "buttons",
          "thumbnailImageUrl": "https://img.mp.itc.cn/upload/20170408/53764293ddb64748ac01359a05701c2d_th.jpg",
          "title": "Menu",
          "text": "Please select",
          "actions": [
            {
              "type": "postback",
              "label": "Buy",
              "data": "action=buy&itemid=123"
            },
            {
              "type": "postback",
              "label": "Add to cart",
              "data": "action=add&itemid=123"
            },
            {
              "type": "uri",
              "label": "View detail",
              "uri": "http://example.com/page/123"
            }
          ]
        }
      }
      
       
      
    ]
  })
  .then(() => console.log({success: true}))
  .catch(err => console.log(err))
