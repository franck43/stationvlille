(function() {
  'use strict';

  angular
    .module('stationVlille')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).state('carousel', {
        url: '/carouselPage',
        templateUrl: 'app/components/carouselPage/carouselPage.html',
        controller: 'CrlController',
        controllerAs: 'carctrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
