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
      controller: StationListController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function StationListController() {
      /*var vm = this;
      vm.contributors = [];

      activate();

      function activate() {
        return getContributors().then(function() {
          $log.info('Activated Contributors View');
        });
      }

      function getContributors() {
        return githubContributor.getContributors(10).then(function(data) {
          vm.contributors = data;

          return vm.contributors;
        });
      }

       var xml = "<foo attr=\"value\">bar</foo>";
      $log.log("input -> %s", xml);*/
      // xml to json 
      /*var json = parseToJSON(xml);
      $log.log("to json -> %s", json);*/
    }
  }
})();