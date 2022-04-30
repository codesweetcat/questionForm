const QuestionSets = require("../../models/QuestionSet.model")
exports.create = (req, res) => {
  
};
const getAllQuestionSets = (req, res) => {
    return QuestionSets.findAll().then((data) => {
        res.json({ 'question_sets': data });
    })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving question sets."
            });
          });
  };

  module.exports = {
    getAllQuestionSets,
}