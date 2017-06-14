myApp.factory('macroBitApiService', function ($http) {

    var macroBitApiService = {};

    macroBitApiService.getPoloniexData = function () {
        return $http({
            url: "/api/Poloniex",
            method: "GET",
        })
    }

    return macroBitApiService;
});