var services = angular.module('services');
services.factory('counterService',function($scope, $http){
    return {
        increase : function(){
            $scope.amountOfNotifications++;

        }
    };

});

