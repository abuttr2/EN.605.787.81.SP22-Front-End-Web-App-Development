(function() {
    'use strict';
    angular.module('public')
        .controller('UserInfoController', UserInfoController)
        UserInfoController.$inject = ['user','ApiPath'];
    function UserInfoController(userInformation, ApiPath) {
        let userinfo = this;
        userinfo.user = userInformation
        userinfo.ApiPath = ApiPath
        userinfo.userRegisteredStatus = !(userInformation.constructor && Object.keys(userInformation).length === 0) //check if user is registered
    }
}());
