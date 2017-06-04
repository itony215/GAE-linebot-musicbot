
module.exports.push = function (name) {

  const line = require('@line/bot-sdk');
  const client = new line.Client({
    channelAccessToken: 'c/XMmaPokDjHzMTNmPed0Mjtf3UZ8S/9+ tTB08iIELrmaP5vydkuPLQVPMat1cfVV4H4dfFph4sc1S91OSOg8PWmSg1JbGIyXP7WJvZ1e2X3LJ0zCdKQsk4OS0QkCzlvVY3GqF8UOPa6hGJixR99KgdB04t89 / 1O/w1cDnyilFU='
  });
  const message = {
    type: 'text',
    text: 'Hello World報時!'+name
  };

  client.pushMessage('U98eb646573a9793f8e9142078f2969df', message)
    .then(() => {
    })
    .catch((err) => {
      // error handling
    }, null, true);

}