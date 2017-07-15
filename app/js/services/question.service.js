angular.module('videocueQuiz').factory('QuestionService' , function(){
    var questions = {};
    questions.list = [];
    
    questions.add = function (question){
        questions.list.push(question);
    };
    
    return questions;
});