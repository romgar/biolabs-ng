'use strict';

var biolabsApp = angular.module('biolabsApp'); 

biolabsApp.controller('mapController', function ($scope, GeoJsonService, markers, leafletData) {
    $scope.markers = markers;

    leafletData.getMap().then(function(map) {
      var lmarkers = [];
      angular.forEach(markers, function(marker) {
        lmarkers.push(new L.marker([marker.lat, marker.lng]));
      });
      var group = new L.featureGroup(lmarkers);
      map.fitBounds(group.getBounds());
    });
});


biolabsApp.controller('addLabController', function ($scope, $resource, $http, settings) {

    $scope.lab = {};

    $scope.save = function(lab) {
        var LabsResource = $resource(settings.API_ENDPOINT);
        //$http.post(settings.API_ENDPOINT, lab);
        var dataToSave = new LabsResource(lab);
        dataToSave.$save(function (data, headers)
            {
              if (data.success && data.success == true)
              {
               console.log("Data Sent Successfully!");
              }
              else
              {
               console.log("ERROR: " + JSON.stringify(data));
              }
            }
        );
        console.log(lab);
    };

});
