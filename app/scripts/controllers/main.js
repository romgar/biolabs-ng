'use strict';

var biolabsApp = angular.module('biolabsApp'); 

biolabsApp.controller('mapController', function ($scope, GeoJsonService, markers, leafletData) {

    leafletData.getMap().then(function(map) {
      var markersCluster = L.markerClusterGroup();
      angular.forEach(markers, function(marker) {
          var marker = new L.marker([marker.lat, marker.lng]);
          markersCluster.addLayer(marker);
      });
      map.fitBounds(markersCluster.getBounds());
      map.addLayer(markersCluster);
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
