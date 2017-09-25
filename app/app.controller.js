(function() {
	'use strict'

	angular
		.module('myApp')
		.controller('Pagination',Pagination); 

	Pagination.$inject = ['$q','$scope','$filter','$http','$log','DataService'];

	function Pagination($q,$scope,$filter,$http,$log,DataService) {
		/*jshint validthis: true */
		var vm = this;
		vm.currentPage = 0;
		vm.pageSize = 3;
		vm.data = [];
		vm.q = '';
		vm.getData = getData;
		vm.searchData = searchData;
		vm.numberOfPages = numberOfPages;

		init();

		function init() {
			var promises = [getData(),searchData()];
			return $q.all(promises)
				.then(function() {
					$log.info('Succesful returned data');
				})
				.catch(function() {
					$log.error('Failed returning data');
				});
		}

		function getData() {
			return DataService.getData().then( function(data) {
				vm.data = data;
				return vm.data;
			});
		}

		function searchData() {
			return $filter('filter')(vm.data,vm.q);
		}
		
		function numberOfPages() {
			return Math.ceil(vm.searchData().length / vm.pageSize);                
		}
	}
})();
