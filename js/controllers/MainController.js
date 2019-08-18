app.controller('MainController', ['$scope', 'UsersService', 'BooksService', function ($scope, UsersService, BooksService) {
    var self = this;

    self.addedItems = [];

    $scope.title = 'Toko Buku Agung';

    BooksService.index().success(function (data) {
        $scope.books = data;
    });

    UsersService.index().success(function (data) {
        $scope.users = data;
    });

    self.itemQty = 0;
    self.totalPrice = 0;

    $scope.addToCart = function (book) {
        self.addedItems.push(book)
        console.log(book.price)
        self.itemQty++
        console.log(self.addedItems)
    }

    $scope.checkOut = function () {
        self.addedItems = []
        self.itemQty = 0
        console.log('checkout')
    }
}]);