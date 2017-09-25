(function() {
	'use strict'

	angular
		.module('myApp')
		.directive('paginationDatatable',paginationDatatable);

	function paginationDatatable() {
		var directive = {
			restrict: 'E',
			templateUrl: '/components/pagination-datatable.html',
			scope: false,
			controller: 'Pagination',
			controllerAs: 'pager'
		};
		return directive;
	}
})();
