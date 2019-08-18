app.service('BooksService', ['$http', function ($http) {
    this.index = function () {
        return $http.get('http://192.168.123.233/intern-api/list.php');
    }
}]);