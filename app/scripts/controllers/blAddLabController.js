
biolabsApp.controller('blAddLabController', function ($state, $scope, $resource, $http, settings, ngDialog, blFlash) {

    $scope.lab = {};

    var dialog = ngDialog.open({
        template: 'partials/add_lab.html',
        controller: ['$scope', function ($scope) {
            $scope.save = function (lab) {
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
                blFlash.setMessage('Thanks for your contribution !');
                console.log(lab);
                $scope.closeThisDialog();
            };
        }]
    });

    dialog.closePromise.then(function (data) {
        $state.transitionTo('map');
    });

});
