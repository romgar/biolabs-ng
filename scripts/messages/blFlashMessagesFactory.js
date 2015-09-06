
var biolabsApp = angular.module('biolabsApp');

biolabsApp .factory("blFlash", function($rootScope) {
  var queue = [];
  var currentMessage = "";

  return {
    setMessage: function(message) {
      queue.push(message);
    },
    getMessage: function() {
      currentMessage = queue.shift() || "";
      return currentMessage;
    }
  };
});