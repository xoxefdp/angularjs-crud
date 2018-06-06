(function() {
	'use strict'

	angular
		.module('myApp')
		.directive('paginationControls',paginationControls)

	function paginationControls() {
		var directive = {
			restrict: 'E',
			templateUrl: '/components/controls/pagination-controls.html'
		}
		return directive
	}
})()
