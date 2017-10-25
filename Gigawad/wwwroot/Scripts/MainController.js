(function () {

    var app = angular.module("app");

    var MainController = function ($scope, $log, getLambdaStaticData) {
        $log.info("GH1");
        //$scope.MainControllerName = "MainController.js";
        
        var onGetLambdaStaticDataComplete = function (data) {
            $log.info("GH4");
            $scope.lambdaStaticData = data;
        }
        
        var onError = function (reason) {
            $log.info("GH5");
            $scope.lambdaStaticData.name = "Static Data error";
        }

        $log.info("GH2");
        getLambdaStaticData.getStaticData().then(onGetLambdaStaticDataComplete, onError);;
        $log.info("GH3");
    };

    app.controller("MainController", ['$scope', '$log','getLambdaStaticData', MainController]);
    
}());