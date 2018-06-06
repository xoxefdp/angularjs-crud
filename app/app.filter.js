(function() {	
	'use strict'

	angular
		.module('myApp')
		.filter('startFrom',startFrom)

	function startFrom() {
		return function(input,start) {
			start =+ start
			return input.slice(start)
		}
	}
})()
