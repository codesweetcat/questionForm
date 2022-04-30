const express = require('express');
const answerController = require('../controllers/answers.controllers');
const router = new express.Router();
const questionSetController = require("../controllers/questionSet.controller.js");


router.get('/', questionSetController.getAllQuestionSets);
router.post('/postQuestion', 
    answerController.addPostAnswers    
);

module.exports = router;