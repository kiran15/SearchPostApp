(function() {
    'use strict';

    angular
        .module('searchAppApp')
        .controller('postController', ControllerController);

    ControllerController.inject = ['$http'];

    function ControllerController($http) {
        var postCtrl = this;

        $http.get("../app/data/SampleJsonData.json")
            .then(function(response) {
                postCtrl.myContent = response.data;
            });
    }
})();