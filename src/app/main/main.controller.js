(function() {
  'use strict';

  angular
  .module('stationVlille')
  .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout,$log, webDevTec, toastr, vlilleStations) {
    var vm = this;
    vm.$log = $log;
    $log.log("Launching Main Controller");
    vm.awesomeThings = [];
    vm.stations = [];
    vm.slides = [
      {
        id:0,
        item:0
      },
      {
        id:1,
        item:1
      },
      {
        id:2,
        item:2
      },
      {
        id:3,
        item:3
      },
      {
        id:4,
        item:4
      }
    ];
    vm.classAnimation = '';
    vm.creationDate = 1480536646119;
    vm.showToastr = showToastr;
    
    vm.stateModel = false;
    vm.tab = 1;
    vm.tabIsSet = tabIsSet;

    activate();

    function activate() {
      getWebDevTec();
      getStations();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function tabIsSet(checkTab) {
      return vm.tab === checkTab;
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    function getStations() {
      vm.stations = vlilleStations.getStations();

      angular.forEach(vm.stations, function(stations) {
        stations.rank = Math.random();
      });
    }
  }
})();