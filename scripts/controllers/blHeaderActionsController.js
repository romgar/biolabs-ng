var biolabsApp = angular.module('biolabsApp');

biolabsApp.controller('blHeaderActionsController', function ($scope, ngDialog) {

    $scope.addLab = function() {
        ngDialog.open({
            template: 'partials/add_lab.html'
        });
    };

    $scope.contactUs = function() {
        ngDialog.open({
            template: 'partials/contact.html'
        });
    };

});