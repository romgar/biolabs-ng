'use strict';

var biolabsApp = angular.module('biolabsApp'); 

biolabsApp.controller('blMapController', function ($scope, GeoJsonService, blFlash) {

    angular.element(document).ready(function () {

        var southWest = L.latLng(-85, -180),
            northEast = L.latLng(85, 180),
            wholeWorldBounds = L.latLngBounds(southWest, northEast);

        var map = L.map('map', {minZoom: 2, maxBounds: wholeWorldBounds});
        var mapLink =
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',
                maxZoom: 18
            }).addTo(map);

        GeoJsonService.getData().then(function(markers) {
            var markersCluster = L.markerClusterGroup();
            angular.forEach(markers, function (marker) {
                var marker = L.marker([marker.lat, marker.lng]).bindPopup(marker.message);
                markersCluster.addLayer(marker);
            });
            map.fitBounds(markersCluster.getBounds());
            map.addLayer(markersCluster);
        }, function(error) {
            map.setView([51.505, -0.09], 13);
            blFlash.instantMessage('danger', 'Connection error. Labs are not available');
        });
    });
});

