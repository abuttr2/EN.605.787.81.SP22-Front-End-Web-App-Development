(function() {
    'use strict';
    angular.module('MenuApp')
        .controller('itemsController', itemsController);
        itemsController.$inject = ['items']
    function itemsController(items) {
        var itemsFound = this;
        itemsFound.items = items['menu_items'];
    }
}());