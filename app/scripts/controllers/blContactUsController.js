
biolabsApp.controller('blContactUsController', function ($state, $scope, $resource, $http, settings, ngDialog) {

    var dialog = ngDialog.open({
        template: 'partials/contact.html'
    });

    dialog.closePromise.then(function (data) {
        $state.transitionTo('map');
    });

});
