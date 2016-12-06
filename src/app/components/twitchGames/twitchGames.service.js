(function() {
  'use strict';

  angular
      .module('stationVlille')
      .service('twitchGames', twitchGames);

  /** @ngInject */
  function twitchGames($http,$log) {
    //var apiHost = 'http://vlille.fr/stations';
    var apiHost = 'https://api.twitch.tv/kraken/games/top';
    var appId = 'ebd5435mo2bg913xi1nh32hbdlan3hr';

    

    this.getTopGames = getTopGames;


    function getTopGames() {
      $log.log("executing getTopGames()");
      var http = $http.get(apiHost + '?limit=100&client_id=' + appId)
        .then(getTopGamesComplete)
        .catch(getTopGamesFailed);
      $log.log(http);
      return http;
       /*
        $log.log('return http GET');
        $log.log(http);
      $log.log('return data');
      $log.log(data);*/
      //return data;

      function getTopGamesComplete(response){
        $log.log('Data');
        $log.log(response.data);
        // TODO: Convertir la réponse en JSON
        return response.data;
      }
      function getTopGamesFailed(error) {
        $log.error('XHR Failed for getTopGames.\n' + angular.toJson(error.data, true));
      }

    }
  }

})();