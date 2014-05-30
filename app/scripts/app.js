'use strict';

var biolabsApp = angular
  .module('biolabsApp', ["leaflet-directive", "ui.router"]);

biolabsApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /map
  $urlRouterProvider.otherwise("/map");
  //
  // Now set up the states
  $stateProvider
    .state('map', {
      url: "/map",
      templateUrl: "partials/map.html",
      controller: "mapController"
    })
    .state('add-lab', {
      url: "/add-lab",
      templateUrl: "partials/add_lab.html",
      controller: "addLabController"
    })
    .state('contact', {
      url: "/contact",
        templateUrl: "partials/contact.html",
        controller: "contactController"
      });

});