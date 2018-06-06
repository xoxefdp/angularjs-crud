(function() {
	'use strict'

	angular
		.module('myApp')
		.controller('PaginationController', Controller)

	Controller.$inject = ['$q', '$filter', '$http', '$log', '$window','CommentDataService']

	function Controller($q, $filter, $http, $log, $window, CommentDataService) {
		var vm = this

		/* ATTRIBUTES */
		vm.currentPage = 0
		vm.pageSize = 2
		vm.data = []
		vm.q = ''

		/* METHODS */
		vm.getData = getData
		vm.searchData = searchData
		vm.numberOfPages = numberOfPages
		vm.previousPage = previousPage
		vm.nextPage = nextPage

		/* LIFECYCLE HOOKS */
		vm.$onInit = initialize

		function initialize() {
			var promises = [getData(), searchData(), numberOfPages()]

			$q.all(promises).then(function (success) {
				$log.info('Successful data return', success)
				$window.addEventListener('keydown', function (e) {
					switch (e.code) {
					case 'ArrowLeft':
						if (vm.currentPage > 1) {
							vm.previousPage()
							$log.info('ArrowLeft', vm.currentPage)
						}
						break
					case 'ArrowRight':
						if (vm.currentPage <= vm.searchData().length / vm.pageSize - 1) {
							vm.nextPage()
							$log.info('ArrowRight', vm.currentPage)
						}
						break
					}
				})
			}, function (failed) {
				$log.error('Failed returning data', failed)
			})
		}

		function getData() {
			return CommentDataService.getAll()
				.then(
					function(success) {
						vm.data = success
					}, function(failed){
						$log('Constroller data handle failed', failed)
					}
				)
		}

		function searchData() {
			return $filter('filter')(vm.data,vm.q)
		}

		function numberOfPages() {
			var number = Math.ceil(vm.searchData().length / vm.pageSize)
			return number !== 0 ? number : 1
		}

		function previousPage() {
			// return vm.currentPage > 1 ? vm.currentPage = vm.currentPage - 1 : 1
			return vm.currentPage = vm.currentPage - 1
		}

		function nextPage() {
			// return vm.currentPage < vm.numberOfPages() - 1 ? vm.currentPage = vm.currentPage + 1 : vm.numberOfPages()
			return vm.currentPage = vm.currentPage + 1
		}
	}
})()
