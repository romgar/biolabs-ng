
var biolabsApp = angular.module('biolabsApp');


biolabsApp .factory("blFlash", function($rootScope) {
  var queue = [];
  var currentMessage = "";

  $rootScope.$on("$stateChangeSuccess", function() {
    console.log('CHANGE ROUTE !!');
    console.log(queue);
    currentMessage = queue.shift() || "";
  });

  return {
    setMessage: function(message) {
      queue.push(message);
    },
    getMessage: function() {
      return currentMessage;
    }
  };
});