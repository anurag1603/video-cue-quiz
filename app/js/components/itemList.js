'use strict';

angular.module('videocueQuiz').controller('itemsList', function ($sce, $uibModal) {
    
    this.list = ['tv', 'fridger ', 'ac' , 'cooler'];

    this.config = {
        sources: [
            {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
            {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
            {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
        ],
        tracks: [
            {
                src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                kind: "subtitles",
                srclang: "en",
                label: "English",
                default: ""
            }
        ],
        theme: "bower_components/videogular-themes-default/videogular.css",
        plugins: {
            poster: "http://www.videogular.com/assets/images/videogular.png"
        }
    };

this.openModal = function (){
    console.log('inside modal open');
    $uibModal.open({
        animation:true,
         component: 'videoQuizData' , 
          size: 'large'
    });
};

});