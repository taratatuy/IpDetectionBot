const tmi = require('tmi.js');
const http = require('http');

const { BotAuthData } = require('./config.js');

const options = {
  options: {
    clientId: BotAuthData.client_id,
    debug: false,
  },
  connection: {
    reconnect: true,
  },
  identity: {
    username: BotAuthData.Username,
    password: BotAuthData.Token,
  },
  channels: BotAuthData.Channels,
};

const client = new tmi.client(options);

client.connect();

client.on('chat', onMessageHandler);

function onMessageHandler(target, context, msg, self) {
  if (context.username != 'writebot_') {
    return;
  }

  if (msg.substr(0, 1) != '!') {
    return;
  }

  const parse = msg.split(' ');

  if (parse[0].slice(1).toLowerCase() === 'ip') {
    http.get('http://eth0.me/', (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        client.say(target, data);
      });
    });
  }
}
