const { validationResult } = require('express-validator');
const database = require('../db');

const initDatabase = (req, res) => {
//question_sets table, look after all questions related information: title, type:{multipleChoiceAndSingleChoice, multipleChoice}, answers: upon question type, answers structure are different, but format is JSON
    const createQuestionSets = 'CREATE TABLE IF NOT EXISTS question_sets2(id int auto_increment primary key, title varchar(255), type varchar(255), answers json)';
//answers table, store use's selected answers titles as brief reference, which help for further query. 
    const answersTable = 'CREATE TABLE IF NOT EXISTS answers2(id int auto_increment primary key, user_id int, question_sets_id int, answers_brief TEXT)';

    database.query(createQuestionSets, (err) => {
        if (err) throw err;
    });
    database.query(answersTable, (err) => {
        if (err) throw err;
    });
    res.send('Table created!')
};

const insertMandSQuestionSets = (req, res)=>{
    
    const questionSet = {
        title: 'Medical conditions',
        type: 'multipleChoiceAndSingleChoice',
        answers: JSON.stringify([
            {"describtion": "Do you have one of the following conditions that you are hoping to discuss Medical Cannabis treatment for?","answers":[{"answer_title":"Abdominal pain","sort_code":"0"},
        {"answer_title":"Facial pain","sort_code":"1"},
        {"answer_title":"Cancer-related pain","sort_code":"2"},
        {"answer_title":"Headache","sort_code":"3"},
        {"answer_title":"Multiple sclerosis","sort_code":"4"},
        {"answer_title":"Back and neck pain","sort_code":"5"},
        {"answer_title":"None","sort_code":"6"}]
        },{"describtion": "Have you ever had an episode of schizophrenia and/or psychosis?","answers":[
        {"answer_title":"Yes","sort_code":"0"},{"answer_title":"No","sort_code":"1"}]}])
        
    };
    const sqlQuery = 'INSERT INTO question_sets2 SET ?';
    database.query(sqlQuery, questionSet, (err, row) => {
        if (err) throw err;
        res.send('multipleAndSingleQuestions successfully!');
    });
}

const insertMQuestionSets = (req, res)=>{
    
    const questionSet = {
        title: 'Medication history',
        type: 'multipleChoice',
        answers: JSON.stringify(
                {"describtion": "Have you ever had any medical problems regarding your:","answers":[{"answer_title":"Kidney","sort_code":"0"},{"answer_title":"Liver","sort_code":"1"},{"answer_title":"None","sort_code":"2"}]}
        )
        
    };
    const sqlQuery = 'INSERT INTO question_sets2 SET ?';
    database.query(sqlQuery, questionSet, (err, row) => {
        if (err) throw err;
        res.send('multipleAndSingleQuestions successfully!');
    });
}

const getAllQuestions = (req, res) => {
    const sqlQuery = 'SELECT * FROM question_sets2';
    database.query(sqlQuery, (err, result) => {
        if (err) throw err;
        res.json({ 'question_sets': result });
    });
};
const getRowArray = (reqestArray)=>{
    return reqestArray.map((row)=>{
        return Object.keys(row).map(key=>{
             if(key !== 'answers_brief') return row[key]
             else{ return JSON.stringify(row[key])}
         })
     })
}
const addPostAnswers = (req, res) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        res.status(500).send(errors.array());
    } else {
        const rowValues = getRowArray(req.body.res)
        const sqlQuery = 'INSERT INTO answers2 (user_id, question_sets_id, answers_brief) VALUES ?';
        database.query(sqlQuery, [rowValues], (err, row) => {
            if (err) throw err;
            res.status(200).json('Subscribed successfully!')});
    }
};

module.exports = {
    initDatabase,
    addPostAnswers,
    getAllQuestions,
    insertMandSQuestionSets,
    insertMQuestionSets,
    getRowArray
}