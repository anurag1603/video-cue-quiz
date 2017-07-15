'use strict';

angular.module('videocueQuiz').component('videoPlayer', {
    templateUrl: 'views/video-player.html',
    controller: function ($sce, $uibModal , $interval , $timeout , $window) {

        var $ctrl = this;
        var questions = JSON.parse($window.localStorage.getItem('questions')) || [];
        var quesindex = 1;
        var quesInterval;
        
        $ctrl.api = {};

        this.config = {
            sources: [
                {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"),
                    type: "video/mp4"}
            ],
            autoHide:false,
            theme: "bower_components/videogular-themes-default/videogular.css",
            plugins: {
                poster: "http://www.videogular.com/assets/images/videogular.png"
            }
        };
        
        function openQuizModal (ques) {
            quesindex++;
            console.log(ques);
             $uibModal.open({
                animation: true,
                template: ques,
                size: 'large'
            });
            
        }
        
        this.openModal = function () {
            console.log('inside modal open');
            $uibModal.open({
                animation: true,
                component: 'videoQuizData',
                size: 'large'
            });
        };

        this.onPlayerReady = function (API) {
            $ctrl.api = API;
        };
        
//        $timeout(function(){
//            $ctrl.api.play();
//        }, 1000);
        $ctrl.onUpdateTime = function (value, duration){
            quesInterval = duration/questions.length;
            if (value > duration* quesindex/questions.length) {
              openQuizModal(questions[quesindex -1]);
            }
        };
    }
});