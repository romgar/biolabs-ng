
biolabsApp.controller('blAddLabController', function ($scope, $resource, $http, settings, ngDialog) {

    $scope.lab = {};

    $scope.save = function(lab) {
        var LabsResource = $resource(settings.API_ENDPOINT);

        var dataToSave = new LabsResource(lab);
        dataToSave.$save(function (data, headers) {
                if (data.success && data.success == true) {
                    console.log("Data Sent Successfully!");
                }
                else {
                    console.log("ERROR: " + JSON.stringify(data));
                }
            }
        );
        console.log(lab);
        $scope.closeThisDialog();
    };

});
