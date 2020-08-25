const dotenv = require('dotenv');
const path = require('path');

const root = path.join.bind(this, __dirname);
dotenv.config({ path: root('.env') });

const BotAuthData = {
  Username: process.env.BOTUSERNAME,
  Channels: ['#writebot_'],
  //   Port: process.env.PORT || 3000,
  client_id: process.env.client_id,
  client_secret: process.env.client_secret,
  Token: process.env.TOKEN,
};

module.exports = {
  BotAuthData,
};
