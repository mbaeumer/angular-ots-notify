var controllers = angular.module('controllers');
controllers.controller('appController',function($scope){
    $scope.increase = function () {
        $scope.amountOfNotifications++;
    };

    $scope.decrease = function () {
        $scope.amountOfNotifications--;
    };

    $scope.clear = function () {
        $scope.amountOfNotifications = 0;
    };

    $scope.getAmountOfNotifications = function () {
        return $scope.amountOfNotifications;
    };

    $scope.amountOfNotifications = 1;
});

