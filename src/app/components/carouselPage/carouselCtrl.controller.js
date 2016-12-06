(function() {
  'use strict';

  angular
  .module('stationVlille')
  .controller('CrlController', CrlController);

  /** @ngInject */
  function CrlController($log) {
    var vm = this;
    $log.log("Launching Carousel Controller");
    vm.slides = [
      {
        id: 0,
        image: "img2.jpg"
      },
      {
        id: 1,
        image: "img4.jpg"
      },
      {
        id: 2,
        image: "img1.png"
      }
    ];
   
  }
})();