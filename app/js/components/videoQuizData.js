'use strict';

angular.module('videocueQuiz').component('videoQuizData', {
    templateUrl: 'views/video-quiz-data.html',
    controller: function ($window, QuestionService) {
        console.log('man shit happens ');
        var $ctrl = this;
        $ctrl.questions = "";

        $ctrl.videoData = {
            url: JSON.parse($window.localStorage.getItem('url')) || "",
            questions: JSON.parse($window.localStorage.getItem('questions')) || [],
            cues: []
        };

        $ctrl.addUrl = function (url) {
            $window.localStorage.setItem('url', JSON.stringify($ctrl.videoData.url));
        };

        $ctrl.addQuestions = function (ques) {
            $ctrl.videoData.questions.push(ques);
            $window.localStorage.setItem('questions', JSON.stringify($ctrl.videoData.questions));
            $ctrl.questions = "";
        };

        $ctrl.deleteQues = function (ques) {
            $ctrl.videoData.questions.splice($ctrl.videoData.questions.indexOf(ques), 1);
            $window.localStorage.setItem('questions', JSON.stringify($ctrl.videoData.questions));
        };

    }
});