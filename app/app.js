var app = angular.module('MoodleLite', ['ngMaterial', 'ngRoute']);

/* ANGULAR MATERIAL THEME CONFIG */
app.config(function($mdThemingProvider) {
    var fixedOrange = $mdThemingProvider.extendPalette('orange', {
        'contrastDefaultColor': 'light'
    });

    $mdThemingProvider.definePalette('fixed-orange', fixedOrange);

    $mdThemingProvider.theme('default')
        .primaryPalette('fixed-orange')
        .accentPalette('light-blue')
        .warnPalette('red')
        .backgroundPalette('grey');
});

/* APPLICATION ROUTES */
app.config(function($routeProvider) {

    $routeProvider.when('/courses/', {

    })

    .otherwise({
      templateUrl: '/assets/partials/login.html',
    });
});
