var biolabsApp = angular.module('biolabsApp');

biolabsApp.controller('blHeaderActionsController', function ($scope, ngDialog) {

    $scope.addLab = function() {
        ngDialog.open({
            template: 'partials/add_lab.html'
        });
    };

    $scope.lab = {};

    $scope.save = function(lab) {
        var LabsResource = $resource(settings.API_ENDPOINT);
        //$http.post(settings.API_ENDPOINT, lab);
        var dataToSave = new LabsResource(lab);
        dataToSave.$save(function (data, headers)
            {
              if (data.success && data.success == true)
              {
               console.log("Data Sent Successfully!");
              }
              else
              {
               console.log("ERROR: " + JSON.stringify(data));
              }
            }
        );
        console.log(lab);
    };
});