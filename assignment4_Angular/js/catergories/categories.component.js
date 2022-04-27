(function() {
    'use strict';
    angular.module('MenuApp')
        .component('categories', {
           templateUrl: 'js/catergories/templates/categories.component.template.html',
            bindings: {
                categories: '<'
            }
        });
})();