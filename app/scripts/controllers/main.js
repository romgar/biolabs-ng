'use strict';

var biolabsApp = angular.module('biolabsApp'); 

biolabsApp.controller('mapController', function ($scope, GeoJsonService, markers) {
    $scope.message = "map";
    $scope.markers = markers;
});


biolabsApp.controller('addLabController', function ($scope, GeoJsonService) {
    $scope.message = "add lab";

});


biolabsApp.controller('contactController', function ($scope, GeoJsonService) {
    $scope.message = "contact";

});
