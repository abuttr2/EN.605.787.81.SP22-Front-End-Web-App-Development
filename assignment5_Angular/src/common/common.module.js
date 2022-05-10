(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://abuttru1-frontend-course.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
