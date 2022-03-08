(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.items = '';
        $scope.message = '';
        $scope.clicked = false;
        $scope.check = function() {
            if ($scope.items.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.clicked = true;
                $scope.empty = false;
                let itemsArray = $scope.items.split(',').filter(function(item) {
                    return item.trim() !== '';
                });
                if (itemsArray.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        };
    }
})();