(function () {

    var app = angular.module("app", ["ngRoute"]);

    app.config(function ($routeProvider) {

        $routeProvider
            .when("/index", {
                templateUrl: "index.html",
                controller: "MainController"
            })
            .otherwise({ redirectTo: "/index" });
    });

}());
