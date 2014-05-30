'use strict';

var biolabsApp = angular.module('biolabsApp'); 

biolabsApp.controller('mapController', function ($scope, GeoJsonService) {
    $scope.message = "map";

    GeoJsonService.getData()
    .then(function(result) {
        $scope.markers = result;
        console.log($scope.markers);
    });
});


biolabsApp.controller('addLabController', function ($scope, GeoJsonService) {
    $scope.message = "add lab";

});


biolabsApp.controller('contactController', function ($scope, GeoJsonService) {
    $scope.message = "contact";

});
