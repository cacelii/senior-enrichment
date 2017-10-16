'use strict'
const Sequelize = require('sequelize');
const db = require('../index');
const {STRING} = Sequelize;

module.exports = db.define('student', {
  name: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false
  }
});
