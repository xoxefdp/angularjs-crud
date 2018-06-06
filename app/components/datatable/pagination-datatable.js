(function() {
	'use strict'

	angular
		.module('myApp')
		.directive('paginationDatatable',paginationDatatable)

	function paginationDatatable() {
		var directive = {
			restrict: 'E',
			templateUrl: '/components/datatable/pagination-datatable.html'
		}
		return directive
	}
})()
