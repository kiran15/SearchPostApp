(function() {
    "use strict";

    angular
        .module("searchAppApp")
        .service("userLoginService", ["$cookies", function($cookies) {
            var loginDetails, setLoginDetails, getLoginDetails;

            setLoginDetails = function(value) {
                if (value.username === "pranik.garg" && value.password === "pranik@123") {
                    loginDetails = value;
                    $cookies.put("loginDetails", JSON.stringify(value));
                    return true;
                }
                return false;
            };

            getLoginDetails = function() {
                if (loginDetails === undefined) {
                    loginDetails = JSON.parse($cookies.get("loginDetails"));
                }
                return loginDetails;
            };

            return {
                setLoginDetails: setLoginDetails,
                getLoginDetails: getLoginDetails
            };
        }]);
})();