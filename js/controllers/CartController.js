app.controller('CartController', ['$scope', function ($scope) {
    var self = this
    self.items = $scope.main.addedItems
    self.qty = $scope.main.itemQty
    $scope.tes = 'tes'
}]);