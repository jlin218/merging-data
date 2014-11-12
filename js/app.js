"use strict";

var addressBook = angular.module('AddressBook', []);
addressBook.controller('AddressController', ['$scope', function($scope) {
    $scope.employees = pawneeEmployees;
    $scope.order = 'lastName';
    $scope.orderedBy = function(colName){
		$scope.order = colName;
	};
	$scope.isOrderedBy = function(colName){
		return $scope.order == colName;
	};
}]);