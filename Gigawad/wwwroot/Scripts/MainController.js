
    //var myApp = angular.module("gigaViewer", []);

    //(function(app) {
(function () {

    var app = angular.module("gigaViewer");

    var MainController = function ($scope, $interval, $location) {
        
        $scope.countdown = 5;
        $scope.username = "angular";

        var decrementCountdown = function () {
            $scope.countdown -= 1;

            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        }
        
        $scope.search = function (username) {
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        }

        var countdownInterval = null;

        var startCountdown = function () {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        }

        startCountdown();
        
    };

    app.controller("MainController", ['$scope', '$interval', '$location', MainController]);

    //}(myApp));
}());