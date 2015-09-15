'use strict';

angular.module('biolabsApp')
.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])
.service('GeoJsonService', ['$q', '$http', '$resource', 'settings', function($q, $http, $resource, settings) {

    var _this = this;

    this.convertAPIDataToMarkers = function(data) {
        var markers = [];

        angular.forEach(data, function(lab) {
            markers.push({
                lat: parseFloat(lab.latitude),
                lng: parseFloat(lab.longitude),
                message: lab.name + '<br/>' + lab.adress
            })
        });

        return markers;
    };

    this.getLabs = function() {
        var LabsResource = $resource(settings.API_ENDPOINT),
            deferred = $q.defer();

        LabsResource.query(function(data) {
            deferred.resolve(data);
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    };

    this.getData = function() {
        var deferred = $q.defer();

        _this.getLabs().then(function(labs) {
            deferred.resolve(_this.convertAPIDataToMarkers(labs));
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    };

  }]);