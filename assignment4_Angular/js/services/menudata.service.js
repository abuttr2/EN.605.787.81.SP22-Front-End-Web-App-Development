//TODO:
//getallCatorgies method
//getitemsforcategory method
(function() {
    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiEndPoint', 'https://davids-restaurant.herokuapp.com');
    MenuDataService.$inject = ['$http','ApiEndPoint']
    function MenuDataService($http,ApiEndPoint) {
        var service = this;
        service.getAllCategories = function() {
            return $http({
                method:'GET',
                url:(ApiEndPoint + '/categories.json')
            }).then((response) => response.data);
        }
        service.getItemsForCategory = function(categoryShortName) {
            return $http({
                method:'GET',
                url:(ApiEndPoint + '/menu_items.json?category=' + categoryShortName)
            }).then((response) => response.data)
        }
    }
}());