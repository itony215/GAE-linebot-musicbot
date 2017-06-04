module.exports.push = function (name) {
  new Date()
  const line = require('@line/bot-sdk');
  const request = require('request')

  request({
    url: "https://spreadsheets.google.com/feeds/list/1H6TP_OK7XNxS6D8xQyDErlP1ZSa_0lFMEbrxNA1mCvE/1/public/values?alt=json",
    method: "GET"
  }, function (error, response, body) {
    if (error || !body) {
      return;
    } else {
      body = JSON.parse(body);
      console.log(body.feed.entry[0].gsx$主席.$t)

      /*var $ = cheerio.load(body);
      var target = $(".rate-content-sight.text-right.print_hide");
      console.log(target[15].children[0].data);
      jp = target[15].children[0].data;
      if (jp < 0.28) {
        bot.push('使用者 ID', '現在日幣 ' + jp + '，該買啦！');
      }
      timer2 = setInterval(_japan, 120000);*/
    }
  });

  const client = new line.Client({
    channelAccessToken: 'c/XMmaPokDjHzMTNmPed0Mjtf3UZ8S/9+ tTB08iIELrmaP5vydkuPLQVPMat1cfVV4H4dfFph4sc1S91OSOg8PWmSg1JbGIyXP7WJvZ1e2X3LJ0zCdKQsk4OS0QkCzlvVY3GqF8UOPa6hGJixR99KgdB04t89 / 1O/w1cDnyilFU='
  });
  const message = {
    type: 'text',
    text: '明天要聚會唷～上帝的恩典和禮物攏底家啦！千萬別錯過喔！願上帝賜福於你！'
  };

  client.pushMessage('U98eb646573a9793f8e9142078f2969df', message)
    .then(() => {
    })
    .catch((err) => {
      // error handling
    }, null, true);

}