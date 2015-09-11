'use strict';

var biolabsApp = angular
  .module('biolabsApp', ['ui.router', 'ngResource', 'biolabSettings', 'ngDialog', 'mgcrea.ngStrap', 'mgcrea.ngStrap.modal']);

biolabsApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $resourceProvider) {
   // For any unmatched url, redirect to /map
  $urlRouterProvider.otherwise('/map');
  //
  // Now set up the states
  $stateProvider
    .state('map', {
        url: '/map',
        templateUrl: 'partials/map.html',
        controller: 'blMapController'
    })
    .state('map.add-lab', {
      url: '/add-lab',
      controller: 'blAddLabController'
    })
    .state('map.contact', {
      url: '/contact',
      controller: 'blContactUsController'
      });

    //$locationProvider.html5Mode(true);
    $resourceProvider.defaults.stripTrailingSlashes = false;

})
.run(function($state, $rootScope, $alert, blFlash) {

   $state.transitionTo('map');

   $rootScope.$on('$stateChangeError', function (evt, to, toParams, from, fromParams, error) {
        if (error.message) {
            console.error("$stateChangeError : " + error.message);
        } else {
            console.error("$stateChangeError : " + JSON.stringify(error));
        }
    });

    $rootScope.$on('$stateChangeSuccess', function (evt, to, toParams, from, fromParams, error) {
        var message = blFlash.getMessage();
        if (!!message) {
            $alert({
                duration: 3,
                content: message,
                placement: 'top',
                type: 'info',
                show: true,
                container: "#alerts-container",
                dismissable: false
            });
        }
    });
});
