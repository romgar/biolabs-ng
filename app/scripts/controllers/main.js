'use strict';

var biolabsApp = angular.module('biolabsApp'); 

biolabsApp.controller('mapController', function ($scope, GeoJsonService, markers) {

    angular.element(document).ready(function () {
        var map = L.map('map').setView([-41.2858, 174.78682], 14),
        mapLink =
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 18
            }).addTo(map);

        var markersCluster = L.markerClusterGroup();
        angular.forEach(markers, function (marker) {
            var marker = L.marker([marker.lat, marker.lng]).bindPopup(marker.message);
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
