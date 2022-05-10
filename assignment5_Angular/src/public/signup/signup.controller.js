(function() {
    'use strict';
    angular.module('public')
        .controller('SignUpController', SignUpController);
    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService) {
        let signup = this;
        signup.firstName = "";
        signup.lastName = "";
        signup.email = "";
        signup.phone = "";
        signup.shortName = '';
        signup.errorMessage = false;
        signup.message = false;
        signup.submit = function(form) {
            console.log(signup)
            if(form.$invalid) {       //invalid form
                signup.message = false;
                return;
            }
            MenuService.getMenuItem(signup.shortName)
                .then(response => {
                    let favoriteFoodDets = response.data;
                    MenuService.saveUser({
                        firstName: signup.firstName,
                        lastName: signup.lastName,
                        email: signup.email,
                        phone: signup.phone,
                        shortName: signup.shortName,
                        favoriteFoodDets: favoriteFoodDets
                    });
                    signup.message = true;
                    signup.errorMessage = false
                })
                .catch(() => {
                    signup.errorMessage = true;
                    signup.message = false;
                })
        }
    }
}());