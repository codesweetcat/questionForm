const { validationResult } = require('express-validator');
const AnswerModel = require("../../models/AnswerBrief.model")

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
        AnswerModel.bulkCreate(req.body.res)
            .then( (result) => {res.status(200).json(result) })
            .catch(error => {
                console.log(error)
                res.status(404).json(error)
            })
    }
};

module.exports = {
    addPostAnswers,
    getRowArray
}