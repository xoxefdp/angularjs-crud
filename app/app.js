angular.module('myApp', [])
	.filter('startFrom', function() {
		return function(input, start) {
			start =+ start;
			return input.slice(start);
		}
	})
	.controller('paginationController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
		$scope.currentPage = 0;
		$scope.pageSize = 3;
		$scope.data = [];
		$scope.q = '';
		
		$scope.getData = function () {
			return $filter('filter')($scope.data, $scope.q)
		}
		
		$scope.numberOfPages=function(){
			return Math.ceil($scope.getData().length/$scope.pageSize);                
		}
		
		$http.get('http://jsonplaceholder.typicode.com/comments')
			.then(function(response) {
				console.log(response);
				$scope.data = response.data;
			}, function(response) {
				console.log(response);
			});
	}]);
