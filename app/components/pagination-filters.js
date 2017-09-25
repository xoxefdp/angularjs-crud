(function() {
	'use strict'

	angular
		.module('myApp')
		.directive('paginationFilters',paginationFilters);

	function paginationFilters() {
		var directive = {
			restrict: 'E',
			templateUrl: '/components/pagination-filters.html',
			scope: false,
			controller: 'Pagination',
			controllerAs: 'pager'
		};
		return directive;
	}
})();
