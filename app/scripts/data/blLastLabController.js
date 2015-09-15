
biolabsApp.controller('blLastLabController', function($scope, GeoJsonService) {

    GeoJsonService.getLabs().then(function(labs) {
        $scope.labs = labs;
    });

});
