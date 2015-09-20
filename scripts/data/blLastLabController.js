
biolabsApp.controller('blLastLabController', function($scope, GeoJsonService) {

    GeoJsonService.getLabs().then(function(labs) {
        $scope.labs = labs.slice(0, 10);
    });

});
