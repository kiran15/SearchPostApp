(function() {
    'use strict';

    angular
        .module('searchAppApp')
        .controller('homeController', ControllerController);

    ControllerController.inject = ['userLoginService'];

    function ControllerController(userLoginService) {
        var homeCtrl = this;

        var loginParam = userLoginService.getLoginDetails();

        if (loginParam) {
            homeCtrl.username = loginParam.username;
        }

    }
})();