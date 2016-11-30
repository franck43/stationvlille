(function() {
  'use strict';

  angular
    .module('stationVlille')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
