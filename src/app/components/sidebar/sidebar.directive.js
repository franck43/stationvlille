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
      scope: {},
      controller: SidebarController,
      controllerAs: 'sidebar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SidebarController($scope, $aside) {
      var vm = this;

      vm.openAside = openAside;

      function openAside(position, backdrop) {
        $scope.asideState = {
          open: true,
          position: position
        };
        
        function postClose() {
          $scope.asideState.open = false;
        }
        
        $aside.open({
          templateUrl: 'app/components/sidebar/aside.html',
          placement: position,
          size: 'sm',
          backdrop: backdrop,
          controller: function($scope, $uibModalInstance) {
            $scope.ok = function(e) {
              $uibModalInstance.close();
              e.stopPropagation();
            };
            $scope.cancel = function(e) {
              $uibModalInstance.dismiss();
              e.stopPropagation();
            };
          }
        }).result.then(postClose, postClose);
      }
    }
  }
})();