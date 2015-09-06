'use strict';

var biolabsApp = angular.module('biolabsApp'); 

biolabsApp.controller('mapController', function ($scope, GeoJsonService, markers, $alert, blFlash) {

    angular.element(document).ready(function () {

        var southWest = L.latLng(-85, -180),
            northEast = L.latLng(85, 180),
            wholeWorldBounds = L.latLngBounds(southWest, northEast);

        var map = L.map('map', {minZoom: 2, maxBounds: wholeWorldBounds}),
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

