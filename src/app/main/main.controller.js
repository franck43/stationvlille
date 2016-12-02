(function() {
  'use strict';

  angular
    .module('stationVlille')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout,$log, webDevTec, toastr) {
    var vm = this;
    vm.$log = $log;
    $log.log("Launching Main Controller");
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1480536646119;
    vm.showToastr = showToastr;
    vm.stateModel = false;
    vm.tab = 1;
    vm.tabIsSet = tabIsSet;
  // For Tab changing
    
    // FIN: For Tab changing

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

      function tabIsSet(checkTab) {
        $log.log("Tabisset? " + checkTab);
        return vm.tab === checkTab;
      }
    // For Tab changing
   
    // FIN: For Tab changing

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
  }
})();
