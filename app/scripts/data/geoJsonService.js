'use strict';

angular.module('biolabsApp')
  .service('GeoJsonService', ['$q', function($q) {

    this.getData = function() {

        var deferred = $q.defer();

        var exampleData = [
            {
                lat: 59.91,
                lng: 10.75,
                message: "I want to travel here!",
                focus: true,
                draggable: false
            },
            {
                lat: 59.91,
                lng: 40.75,
                message: "I want to travel here too",
                draggable: true
            },        
        ];

        deferred.resolve(exampleData);

        return deferred.promise;
    };

  }]);