(function() {
	'use strict'

	angular
		.module('myApp')
		.directive('paginationFilters',paginationFilters)

	function paginationFilters() {
		var directive = {
			restrict: 'E',
			templateUrl: '/components/filters/pagination-filters.html'
		}
		return directive
	}
})()
