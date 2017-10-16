'use strict'
const Sequelize = require('sequelize');
const db = require('../index');
const {STRING} = Sequelize;

module.exports = db.define('campus', {
  name: {
    type: STRING,
    allowNull: false
  },
  image: {
    type: STRING
  }
});

