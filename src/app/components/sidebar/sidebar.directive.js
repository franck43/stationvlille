(function() {
  'use strict';

  angular
    .module('stationVlille')
    .directive('asideSidebar', asideSidebar);

  /** @ngInject */
  function asideSidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      scope: {
          stateModel: '=',
          tabModel: '='
      },
      controller: SidebarController,
      controllerAs: 'sidebar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SidebarController($log) {
      var vm = this;
      //vm.stateModel = false;

      vm.isSet = isSet;


      vm.setTab = setTab;


      function isSet(checkTab) {
        $log.log("doing isSet()");
        //vm.stateModel = true;
        return vm.tabModel === checkTab;
      }

      function setTab(setTab) {
        vm.tabModel = setTab;
      }
    }
  }
})();