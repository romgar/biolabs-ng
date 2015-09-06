
biolabsApp.controller('blAddLabController', function ($state, $scope, $resource, $http, settings, ngDialog, $alert, blFlash) {

    var dialog = ngDialog.open({
        template: 'partials/add_lab.html',
        controller: ['$scope', function ($scope) {
            $scope.errors = {};
            $scope.save = function (lab) {
                var LabsResource = $resource(settings.API_ENDPOINT);

                var dataToSave = new LabsResource(lab);
                dataToSave.$save(function (data, headers) {
                        blFlash.setMessage('Thanks for your contribution !');
                        $scope.closeThisDialog();
                    }
                , function(response) {
                        var errors = response['data'];
                        angular.forEach(errors, function(value, key) {
                          $scope.errors[key] = value[0];
                        });
                    });
            };
        }]
    });

    dialog.closePromise.then(function (data) {
        $state.transitionTo('map');
    });

});
