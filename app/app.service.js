(function() {
	'use strict'

	angular
		.module('myApp')
		.factory('DataService',DataService);

	DataService.$inject = ['$http','$q','$log'];

	function DataService($http,$q,$log) {
		var vm = this;
		vm.promise = null;

		return {
			getData
		};


		function getData() {

			if (vm.promise == null) {
				// vm.promise = $http.get('http://jsonplaceholder.typicode.com/comments')
				vm.promise = $http.get('data.json')
				.then(getDataSuccess)
				.catch(getDataFailed);
			}

			function getDataSuccess(response, status, headers, config) {
				return response.data;
			}

			function getDataFailed(error) {
				var message = 'XHR Failed for getData.';

				if (error.data && error.data.description) {
					message = message + '\n' + error.data.description;
				}

				$log.info('Error code: '+error.status);
				$log.info('Error status: '+error.statusText);
				$log.info('Error HTTP method: '+error.config.method);
				$log.info('Error URL: '+error.config.url);
				$log.error(message);

				return $q.reject(error);
			}

			return vm.promise;
		}
	}
})();
