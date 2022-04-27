(function() {
    'use strict';
    angular.module('MenuApp')
        .controller('CategoriesController',CategoriesController);
        CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {
        var catergoriesFound = this;
        catergoriesFound.categories = categories;
    }
}());