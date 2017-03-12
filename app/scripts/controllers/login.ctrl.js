(function() {
    'use strict';

    angular
        .module('searchAppApp')
        .controller('loginController', ControllerController);

    ControllerController.inject = ['userLoginService', '$location', '$route'];

    function ControllerController(userLoginService, $location, $route) {
        var loginCtrl = this;

        var loginParam = userLoginService.getLoginDetails();

        if (loginParam) {
            $location.path("/home");
        }

        loginCtrl.doLogin = function() {
            var loginDetails = {};
            loginDetails.username = loginCtrl.username;
            loginDetails.password = loginCtrl.password;
            var loginSuccess = userLoginService.setLoginDetails(loginDetails);
            if (loginSuccess) {
                $location.path("/home");
            }
        };

    }
})();