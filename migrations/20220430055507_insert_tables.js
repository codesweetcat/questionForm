/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 const questionSet1 = {
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

const questionSet2 = {
    title: 'Medication history',
    type: 'multipleChoice',
    answers: JSON.stringify(
            {"describtion": "Have you ever had any medical problems regarding your:","answers":[{"answer_title":"Kidney","sort_code":"0"},{"answer_title":"Liver","sort_code":"1"},{"answer_title":"None","sort_code":"2"}]}
    )
    
};
exports.up = function(knex) {
    return knex
            .insert([questionSet1,questionSet2]).into('question_sets3')
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
