(function() {
	'use strict'

	angular
		.module('myApp')
		.directive('paginationControls',paginationControls);

	function paginationControls() {
		var directive = {
			restrict: 'E',
			templateUrl: '/components/pagination-controls.html',
			scope: false,
			controller: 'Pagination',
			controllerAs: 'pager'
		};
		return directive;
	}
})();
