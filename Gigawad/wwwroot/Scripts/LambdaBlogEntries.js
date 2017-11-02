(function () {

    var getLambdaBlogEntries = function ($http, $log) {

        $log.info("getLambdaBlogEntries GH1"); 
        var getStaticBlogEntries = function () {
            return $http.get("https://y7sr1cwrua.execute-api.us-west-2.amazonaws.com/Prod/")
                .then(function (response) {
                    $log.info("getLambdaBlogEntries GH1a"); 
                    return response.data;
                });
        };
        $log.info("getLambdaBlogEntries GH2"); 
        return {
            getStaticBlogEntries: getStaticBlogEntries
        };
        
    }

    var module = angular.module("app");

    module.factory("getLambdaBlogEntries", getLambdaBlogEntries);

}());