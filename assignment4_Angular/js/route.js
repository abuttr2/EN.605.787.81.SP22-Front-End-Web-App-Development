(function() {
    'use strict';
    angular.module('MenuApp')
        .config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider']
    function RoutesConfig($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
        //Home Page
            .state('home',{
                url: '/',
                templateUrl: 'js/home/templates/home.template.html'
            })
            //Categories Page
            .state('categories',{
                url: '/categories',
                templateUrl: 'js/catergories/templates/main-categories.component.template.html',
                controller: 'CategoriesController as $catergoriesFound',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService)  {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            //Items Page
            .state('items',{
                url: '/{category}/items',
                templateUrl: 'js/items/templates/main-items.component.template.html',
                controller: 'itemsController as $itemsFound',
                resolve: {
                    items: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams)  {
                        return MenuDataService.getItemsForCategory($stateParams.category);
                    }]
                }
            });
    }
}());