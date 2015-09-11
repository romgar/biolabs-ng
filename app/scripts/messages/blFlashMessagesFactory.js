
var biolabsApp = angular.module('biolabsApp');

biolabsApp .factory("blFlash", function($rootScope, $alert) {
  var queue = [];
  var currentMessage = "";

  return {
    setMessage: function(message) {
      queue.push(message);
    },
    getMessage: function() {
      currentMessage = queue.shift() || "";
      return currentMessage;
    },
    instantMessage: function(type, message) {
      $alert({
          duration: 3,
          content: message,
          placement: 'top',
          type: type,
          show: true,
          container: "#alerts-container",
          dismissable: false
      });
    }
  };
});