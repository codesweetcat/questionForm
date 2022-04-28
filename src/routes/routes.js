const express = require('express');
const controller = require('../controllers/controllers');
const { body } = require('express-validator');
const router = new express.Router();

router.get('/init', controller.initDatabase);
router.get('/insertquestions', controller.insertMandSQuestionSets);
router.get('/insertMQuestionSets', controller.insertMQuestionSets);



router.get('/', controller.getAllQuestions);
router.post('/postQuestion', 
    controller.addPostAnswers    
);

module.exports = router;