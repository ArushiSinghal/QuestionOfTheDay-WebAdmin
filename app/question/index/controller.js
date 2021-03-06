import Ember from 'ember';
import Question from 'cbqotd/question/model';

function refreshQuestions (ctrl) {
  "use strict";
  $('#question-loader').addClass('active');
  Question.getAll().then(function (results) {
    console.log(results);
    ctrl.set('quesList', results);
  });
}

export default Ember.Controller.extend({
  init: function () {
    "use strict";
    this._super(...arguments);
    refreshQuestions(this);
  },
  actions : {
    didDeleteQuestion () {
      "use strict";
      refreshQuestions(this);
    },
    didEditQuestion(questionId) {
      "use strict";
      this.transitionToRoute('question.edit', questionId);
    }
  }
});
