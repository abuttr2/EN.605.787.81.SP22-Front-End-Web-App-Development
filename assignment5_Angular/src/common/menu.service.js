(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  let userInformation = {};

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };
  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }
    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  service.getMenuItem = function(shortName) {
    const response = $http.get(ApiPath + '/menu_items/' + shortName + '.json');
    console.log(response)
    return response;
  }
  service.saveUser = function(user) {
    userInformation = user;
  }
  service.getUserInformation = function() {
      return userInformation;
  }
}
})();
