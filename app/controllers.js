app.controller('AppCtrl', function($scope, $mdSidenav) {
    $scope.toggleLeftMenu = function() {
        $mdSidenav('left').toggle();
    };

    $scope.toggleRightMenu = function() {
        $mdSidenav('right').toggle();
    };
});
