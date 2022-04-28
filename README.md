# 1 needs to send requests hit DB, create two tables and populate those tables.via: a, http://localhost:9898/init; b, http://localhost:9898/insertquestions; c, http://localhost:9898/insertMQuestionSets

# 2 getAllQuestions, will send initial questions to FE;

# 3 addPostAnswers, will parse request param, then insert into answers table.

# 4 (not finish), the third type of question, which will update perfer_receive column in user's table
