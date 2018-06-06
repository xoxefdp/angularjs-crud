(function() {
	'use strict'

	angular
		.module('myApp')
		.factory('CommentDataService', DataService)

	DataService.$inject = ['$http','$q','$log']

	function DataService($http,$q,$log) {

		var endpoint = 'http://jsonplaceholder.typicode.com'

		var dataService = {
			getAll: getAll,
			getById: getById,
			save: save,
			modify: modify,
			removeById: removeById
		}

		return dataService


		function getAll() {
			return $http.get(endpoint+'/comments')
			// return $http.get('data.json')
				.then(requestSuccess, requestFailed)
		}

		function getById(id) {
			return $http.get(endpoint + '/comment/' + id)
				.then(requestSuccess, requestFailed)
		}

		function save(comment) {
			return $http.post(endpoint + '/comment/', comment)
				.then(requestSuccess, requestFailed)
		}

		function modify(comment) {
			return $http.update(endpoint + '/comment/', comment)
				.then(requestSuccess, requestFailed)
		}

		function removeById(id) {
			return $http.delete(endpoint + '/comment/' + id)
				.then(requestSuccess, requestFailed)
		}


		function requestSuccess(response) {
			var success = {
				data: response.data,
				status: response.status,
				headers: response.headers,
				config: response.config,
				statusText: response.statusText,
				xhrStatus: response.xhrStatus,
				request: response,
			}

			$log.info(success)

			return $q.resolve(success.data)
		}

		function requestFailed(error) {
			var failed = {
				data: error.data,
				status: error.status,
				headers: error.headers,
				config: error.config,
				statusText: error.statusText,
				xhrStatus: error.xhrStatus,
				request: error,
			}

			$log.error(failed)

			return $q.reject(failed)
		}

	}
})()
