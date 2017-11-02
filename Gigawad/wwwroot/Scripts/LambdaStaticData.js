(function () {

    var getLambdaStaticData = function ($http, $log) {

        $log.info("getLambdaStaticData GH1"); 

        var getStaticData = function () {
            return $http.get("https://xswaci9dz5.execute-api.us-west-2.amazonaws.com/prod/gigawad-com-lambda-for-static-data")
                .then(function (response) {
                    $log.info("getLambdaStaticData GH1a"); 
                    return response.data;
                });
        };
        $log.info("getLambdaStaticData GH2"); 
        return {
            getStaticData: getStaticData
        };
        
    }

    var module = angular.module("app");

    module.factory("getLambdaStaticData", getLambdaStaticData);

}());