
biolabsApp.controller('blLastLabController', function($scope, GeoJsonService) {

    $('.search').collapse();
    $scope.labs = $scope.labs.slice(0, 5);

});
