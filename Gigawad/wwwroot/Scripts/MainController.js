(function () {

    var app = angular.module("app");

    var MainController = function ($scope, $log, getLambdaStaticData, getLambdaBlogEntries, addLambdaBlogEntry) {

        var defaultBlogEntry = {
            name: '',
            content: ''
        };

        $scope.blogEntry = angular.copy(defaultBlogEntry);

        $log.info("MainController GH1");        
        var onGetLambdaStaticDataComplete = function (data) {
            $log.info("MainController GH1a"); 
            $scope.lambdaStaticData = data;
        }
        $log.info("MainController GH2"); 
        var onError = function (reason) {
            $log.info("MainController GH2a"); 
            //$scope.lambdaStaticData.error = "Static Data error";
        }
        $log.info("MainController GH3"); 
        getLambdaStaticData.getStaticData().then(onGetLambdaStaticDataComplete, onError);

        /////////////////////////////////////////////////////
        $log.info("MainController GH4"); 
        var onGetLambdaBlogEntries = function (data) {
            $log.info("MainController GH4a"); 
            $scope.lambdaBlogEntriesData = data;
        }
        $log.info("MainController GH5"); 
        var onGetLambdaBlogEntriesError = function (reason) {
            $log.info("MainController GH5a"); 
            //$scope.lambdaBlogEntriesData.error = "Blog Entries Data error";
        }
        $log.info("MainController GH6"); 
        getLambdaBlogEntries.getStaticBlogEntries().then(onGetLambdaBlogEntries, onGetLambdaBlogEntriesError);


        //////////////////////////////////////////////
        $log.info("MainController GH7"); 
        var onAddBlogEntry = function () {
            $log.info("MainController GH7a"); 
            //refresh the entries...
            getLambdaBlogEntries.getStaticBlogEntries().then(onGetLambdaBlogEntries, onGetLambdaBlogEntriesError);
            //clear the form
            $scope.blogEntry = angular.copy(defaultBlogEntry);
            $scope.formAddBlogEntry.$setPristine();
        }
        $log.info("MainController GH8"); 
        //var onError = function () {
        //    $log.info("MainController GH8a"); 
        //}
        $log.info("MainController GH9"); 
        $scope.addBlogEntry = function (name, content) {
            $log.info("MainController GH9a"); 
            addLambdaBlogEntry.createBlogEntry(name, content).then(onAddBlogEntry, onError);
        }
        $log.info("MainController GH10"); 
        
    };

    

    app.controller("MainController", ['$scope', '$log', 'getLambdaStaticData', 'getLambdaBlogEntries','addLambdaBlogEntry', MainController]);
    
}());