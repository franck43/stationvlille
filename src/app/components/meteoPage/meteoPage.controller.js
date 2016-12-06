(function() {
  'use strict';

  angular
  .module('stationVlille')
  .controller('MeteoController', MeteoController);

  /** @ngInject */
  function MeteoController($log, vlilleStations) {
    var vm = this;
    vm.tab = 2;
    vm.stateModel = true;
    $log.log("Launching Meteo Controller");
    vm.stations = [];
    vm.getStations=getStations;
     activate();

    function activate() {
      getStations();
    }

    function getStations() {
      vm.stations = vlilleStations.getStations();

      angular.forEach(vm.stations, function(stations) {
        stations.rank = Math.random();
      });
    }
  }
})();