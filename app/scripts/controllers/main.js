'use strict';

angular.module('biolabsApp')
  .controller('MainCtrl', function ($scope, GeoJsonService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    GeoJsonService.getData()
    .then(function(result) {
        $scope.markers = result;
    });
});
