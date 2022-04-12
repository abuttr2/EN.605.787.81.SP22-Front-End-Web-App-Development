(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiEndpoint', "https://davids-restaurant.herokuapp.com/menu_items.json")
        .directive('foundItems', FoundItems);

    MenuSearchService.$inject = ['$http', 'ApiEndpoint'];
    NarrowItDownController.$inject = ['MenuSearchService'];

    function FoundItems() {
        var ddo = {
            templateUrl: 'foundItems.html',
            controller: NarrowItDownController,
            controllerAs: 'menuitems',
            bindToController: true,
            scope: {
                items: '<',
                onEmpty: '<',
                onRemove: '&'
            }
        };
        return ddo;
    }

    function MenuSearchService($http, ApiEndpoint) {
        var service = this
        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: (ApiEndpoint)
            }).then(function(response) {
                console.log(response)
                var items = [];
                for (var i = 0; i < response.data['menu_items'].length; i++) {
                    if (response.data['menu_items'][i]['description'].toLowerCase().indexOf(searchTerm) !== -1
                    && searchTerm.length > 0) {
                        items.push(response.data['menu_items'][i]);
                    }
                }
                return items;
            });
        };
    }
    function NarrowItDownController(MenuSearchService) {
        var menuitems = this;
        menuitems.matchedMenuItems = function(food) {
            var promise = MenuSearchService.getMatchedMenuItems(food);
            promise.then(function(response) {
                if (response && response.length > 0) {
                    menuitems.message = '';
                    menuitems.found = response;
                } else {
                    menuitems.message = 'Nothing found!';
                    menuitems.found = [];
                }
            });
        };
        menuitems.removeItem = function(itemIndex) {
            menuitems.found.splice(itemIndex, 1);
        }
    }
})();