(function () {

    var addLambdaBlogEntry = function ($http, $log) {

        $log.info("addLambdaBlogEntry GH1"); 
        var createBlogEntry = function (name, content) {
            var entry = '{ "Name" : "' + name + '",' +
                         '"Content": "' + content + '" }';
            return $http.put("https://y7sr1cwrua.execute-api.us-west-2.amazonaws.com/Prod/", entry)
                .then(function (response) {
                    $log.info("addLambdaBlogEntry GH1a");
                    return;
                });
        };
        $log.info("addLambdaBlogEntry GH2");
        return {
            createBlogEntry: createBlogEntry
        };
        
    }

    var module = angular.module("app");

    module.factory("addLambdaBlogEntry", addLambdaBlogEntry);

}());
