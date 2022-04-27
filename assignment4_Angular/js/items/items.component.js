(function() {
    'use strict';
    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'js/items/templates/items.component.template.html',
            bindings: {
                items: '<'
            }
        });
}());