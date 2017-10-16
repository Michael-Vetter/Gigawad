(function () {

    var github = function ($http, $log) {


        var getUser = function (username) {
            return $http.get("https://api.github.com/users/" + username)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepos = function (user) {
            $log.info("getRepos url: " + user.repos_url);
            return $http.get(user.repos_url)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepoDetails = function (username, reponame) {

            var repo;
            var reportUrl = "https://api.github.com/repos/" + username + "/" + reponame;

            //$log.info("getRepos url: " + user.repos_url);
            return $http.get(reportUrl)
                .then(function (response) {
                    repo = response.data;
                    return $http.get(repo.contributors_url);
                })
                .then(function (response) {
                    repo.contributors = response.data;
                    return repo;
                });
        };
        
        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails
        };

    }

    var module = angular.module("gigaViewer");

    module.factory("github", github);

}());