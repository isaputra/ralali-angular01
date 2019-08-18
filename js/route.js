app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../pages/home.html',
            // controller: 'MainController' 
        })
        .when('/about', {
            templateUrl: '../pages/about.html',
            controller: 'AboutController'
        })
        .when('/contact', {
            templateUrl: '../pages/contact.html',
            controller: 'ContactController'
        })
        .when('/cart', {
            templateUrl: '../pages/cart.html',
            controller: 'CartController'
        })
        .otherwise({
            redirectTo: '/'
        })
});