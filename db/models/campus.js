'use strict'
const Sequelize = require('sequelize');
const db = require('../index');
const {STRING, TEXT} = Sequelize;

const images = [
  'https://www.techuz.com/wp-content/themes/techuz/images/nodejs-icon.png', 'https://ucarecdn.com/f9ce1326-cb12-46d9-8eff-fb3feabfb627/', 'https://s-media-cache-ak0.pinimg.com/originals/f3/47/70/f34770503b90f26ea389f557500ff825.png', 'https://seanjs.org/img/sequelize.png', 'http://www.mberlove.com/blog/wp-content/uploads/2016/05/postgresql-logo-590x280.png', 'https://kyleshevlin.com/wp-content/uploads/2016/11/redux_logo_2.png'
];

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

module.exports = db.define('campus', {
  name: {
    type: STRING,
    allowNull: false
  },
  image: {
    type: STRING,
    defaultValue: function () {
      return getRandomImage();
    }
  },
  info: {
    type: TEXT,
    allowNull: false
  }
});

