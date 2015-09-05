'use strict';

var biolabsApp = angular
  .module('biolabsApp', ['ui.router', 'ngResource', 'biolabSettings', 'ngDialog']);

biolabsApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $resourceProvider) {
   // For any unmatched url, redirect to /map
  $urlRouterProvider.otherwise('/map');
  //
  // Now set up the states
  $stateProvider
    .state('map', {
        url: '/map',
        templateUrl: 'partials/map.html',
        controller: 'mapController',
        resolve: {
            markers: function(GeoJsonService) {
                return GeoJsonService.getData();
            }
        }
    })
    .state('add-lab', {
      url: '/add-lab',
      templateUrl: 'partials/add_lab.html',
      controller: 'addLabController'
    })
    .state('contact', {
      url: '/contact',
        templateUrl: 'partials/contact.html'
      });

    //$locationProvider.html5Mode(true);
    $resourceProvider.defaults.stripTrailingSlashes = false;

})
.run(function($state, $rootScope) {

   $state.transitionTo('map');

   $rootScope.$on('$stateChangeError', function (evt, to, toParams, from, fromParams, error) {
        if (error.message) {
            console.error("$stateChangeError : " + error.message);
        } else {
            console.error("$stateChangeError : " + JSON.stringify(error));
        }
    });
});
