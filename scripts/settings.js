'use strict';

var biolabSettings = angular.module('biolabSettings', []);

/**
 * Service that gives project constants
 *
 */


biolabSettings.constant('settings', {
    //API_ENDPOINT: 'http://api.biolabs.youkidea.com/labs/'
    API_ENDPOINT: 'http://0.0.0.0:6666/labs/'
});
