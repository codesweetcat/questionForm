
const controller = require('../controllers/controllers');


test('testing array object convert array with json', () => {
    const mockData = [
        { user_id: 1, question_sets_id: 1, answers_brief: [] },
        { user_id: 1, question_sets_id: 3, answers_brief: [] }
      ]
    expect(controller.getRowArray(mockData)).toStrictEqual([ [ 1, 1, '[]' ], [ 1, 3, '[]' ] ]);
  });