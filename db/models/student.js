'use strict'
const Sequelize = require('sequelize');
const db = require('../index');
const {STRING, INTEGER} = Sequelize;

module.exports = db.define('student', {
  name: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false
  },
  campusId: {
    type: INTEGER
  }
}, {
  defaultScope: {
    include: [{ all: true }]
  }
});
