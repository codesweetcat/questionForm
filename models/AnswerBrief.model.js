const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/db.config.js");


const AnswerBrief = sequelize.define("answers3", 
{
    id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
    user_id: {
        type: DataTypes.INTEGER
      },
    question_sets_id: {
        type: DataTypes.INTEGER
      },
      answers_brief: {
        type: DataTypes.JSON,
      },
}, {
      freezeTableName: true,
      timestamps: false
  });
  

  module.exports = AnswerBrief;