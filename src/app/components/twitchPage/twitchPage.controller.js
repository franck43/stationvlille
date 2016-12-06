(function() {
  'use strict';

  angular
  .module('stationVlille')
  .controller('TwitchController', TwitchController);

  /** @ngInject */
  function TwitchController($log, twitchGames) {
    var vm = this;
    vm.tab = 4;
    vm.stateModel = true;
    $log.log("Launching Twitch Controller");
    vm.games = [];
    vm.getTopGames=getTopGames;
     activate();

    function activate() {
      getTopGames();
    }

    function getTopGames() {
      vm.games = twitchGames.getTopGames();
      $log.log("http: ");
      $log.log(vm.games);
    }
  }
})();