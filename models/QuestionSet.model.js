
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/db.config.js");




const QuestionSet = sequelize.define("question_sets3", 
{
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      title: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.STRING
      },
      answers: {
        type: DataTypes.JSON,
      },
    }, {
      freezeTableName: true,
      timestamps: false
  });
  
  module.exports = QuestionSet;
  

