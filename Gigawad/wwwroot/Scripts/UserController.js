
(function () {

    var app = angular.module("gigaViewer");

    var UserController = function ($scope, github, $routeParams, $log) {

        $log.info('Enter UserController');
        $scope.repoSortOrder = "-stargazers_count";
        
        $scope.username = $routeParams.username;
        

        var onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError);
        }

        var onRepos = function (data) {
            $scope.repos = data;
        }

        var onError = function (reason) {
            $scope.error = "Could not fetch the user. " + reason.config + ' | ' + reason.statusText + ' | ' + reason.xhrStatus;
        }
        
        github.getUser($scope.username).then(onUserComplete, onError);
        
    };

    app.controller("UserController", ['$scope', 'github', '$routeParams', '$log', UserController]);

    //}(myApp));
}());