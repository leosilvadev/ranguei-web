(function(){

	'use strict';

	angular.module('ranguei.api.services', []);

	angular.module('ranguei.api.services')
		.provider('appApi', function(){
		
			var url = 'http://localhost:9000';
		
			this.$get = function(){
				return {
					url: url
				};
			};

			this.setUrl = function(url){
				this.url = url;
			};

		});

})();
