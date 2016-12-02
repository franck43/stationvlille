(function() {
  'use strict';

  angular
    .module('stationVlille')
    .directive('stationList', stationList);

  /** @ngInject */
  function stationList() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/stationlist/stationlist.html',
      scope: {
      },
      controller: StationListController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function StationListController() {
    }
  }
})();