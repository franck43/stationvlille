(function() {
  'use strict';

  angular
      .module('stationVlille')
      .service('vlilleStations', vlilleStations);

  /** @ngInject */
  function vlilleStations($http,$log) {
    //var apiHost = 'http://vlille.fr/stations';
    var apiHost = 'http://api.openweathermap.org/data/2.5/group?id=6454414,524901,703448,2643743&units=metric';
    var appId = '13c03f6a0143c3e61980445c6608a124';

    

    this.getStations = getStations;


    function getStations() {
      $log.log("executing getStations()");
      var http = $http.get(apiHost + '&APPID=' + appId)
        .then(getStationsComplete)
        .catch(getStationsFailed);
      $log.log(http);
      return http;
       /*
        $log.log('return http GET');
        $log.log(http);
      $log.log('return data');
      $log.log(data);*/
      //return data;

      function getStationsComplete(response){
        $log.log('Data');
        $log.log(response.data);
        // TODO: Convertir la réponse en JSON
        return response.data;
      }
      function getStationsFailed(error) {
        $log.error('XHR Failed for getStations.\n' + angular.toJson(error.data, true));
      }

    }
  }

})();