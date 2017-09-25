(function() {
	'use strict'

	angular
		.module('myApp')
		.factory('DataService',DataService);

	DataService.$inject = ['$http','$q'];

	function DataService($http,$q) {
		return {
			getData
		};

		function getData() {
			// $http.get('http://jsonplaceholder.typicode.com/comments')
			return $http.get('data.json')
				.then(getDataSuccess)
				.catch(getDataFailed);

			function getDataSuccess(response, status, headers, config) {
				return response.data;
			}

			function getDataFailed(error) {
				var message = 'XHR Failed for getData.';

				if (error.data && error.data.description) {
					message = message + '\n' + error.data.description;
				}

				console.log('Error code: '+error.status);
				console.log('Error status: '+error.statusText);
				console.log('Error HTTP method: '+error.config.method);
				console.log('Error URL: '+error.config.url);
				console.log(message);

				return $q.reject(error);
			}
		}
	}
})();
