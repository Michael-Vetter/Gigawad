(function () {

    var getLambdaStaticData = function ($http, $log) {

        $log.info("GH6");

        var getStaticData = function () {
            return $http.get("https://xswaci9dz5.execute-api.us-west-2.amazonaws.com/prod/gigawad-com-lambda-for-static-data")
                .then(function (response) {
                    $log.info("GH7");
                    return response.data;
                });
        };
        $log.info("GH8");
        return {
            getStaticData: getStaticData
        };
        $log.info("GH9");
    }

    var module = angular.module("app");

    module.factory("getLambdaStaticData", getLambdaStaticData);

}());