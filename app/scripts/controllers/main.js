'use strict';

var biolabsApp = angular.module('biolabsApp'); 

biolabsApp.controller('mapController', function ($scope, GeoJsonService, markers) {
    $scope.markers = markers;
});


biolabsApp.controller('addLabController', function ($scope, GeoJsonService) {

    $scope.lab = {};

    $scope.save = function(lab) {
        console.log(lab);
    };

});
