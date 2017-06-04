'use strict';

angular.module('videocueQuiz').component('itemList', {
  templateUrl: 'heroDetail.html',
  bindings: {
    hero: '<'
  }, 
  controller: function (){
      this.getData = function (url){
          console.log(url);
      };
      console.log('man shit happens ');
      
  }
});