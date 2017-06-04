var dt = new Date();
var dt2 = new Date();
console.log(dt.getTime());
const request = require('request')

request({
  url: "https://spreadsheets.google.com/feeds/list/1H6TP_OK7XNxS6D8xQyDErlP1ZSa_0lFMEbrxNA1mCvE/1/public/values?alt=json",
  method: "GET"
}, function (error, response, body) {
  if (error || !body) {
    return;
  } else {
    body = JSON.parse(body);
    const value = body.feed.entry[0].gsx$_cn6ca.$t;
    if (!value) {
      return;
    }
    dt2 = Date.parse(value);
    console.log(dt2-dt)
    for(i=0;i<body.feed.openSearch$totalResults.$t;i++){
      dt2 = Date.parse(body.feed.entry[i].gsx$_cn6ca.$t);
      if(dt2-dt<100000000){
        console.log(body.feed.entry[i].gsx$_cn6ca.$t)
        break;
        
      }
        
      
    }
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