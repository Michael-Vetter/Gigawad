
(function () {

    var app = angular.module("gigaViewer");

    var RepoController = function ($scope, github, $routeParams, $log) {
        $log.info('Enter RepoController');
        var username = $routeParams.username;
        var reponame = $routeParams.reponame;
        
        var onRepo = function (data) {
            $scope.repo = data;
        }
        
        var onError = function (reason) {
            $scope.error = "Could not fetch the user. " + reason.config + ' | ' + reason.statusText + ' | ' + reason.xhrStatus;
        }

        github.getRepoDetails(username, reponame).then(onRepo, onError);

    };

    app.controller("RepoController", ['$scope', 'github', '$routeParams', '$log', RepoController]);

    //}(myApp));
}());