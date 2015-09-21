(function(){
	
	'use strict';
	
	angular.module('ranguei.facebook.services', ['ngCookies', 'ranguei.api.services']);

	angular.module('ranguei.facebook.services')
		.service('userAccess', ['$cookies', '$http', 'appApi', function($cookies, $http, appApi){
		
			var LOGGED_USER = 'LOGGED_USER';

			return {	
				login: function(user){
					$http.post(appApi.url+'/access', user)
						.then(function(){
							$cookies.put(LOGGED_USER, user);

						}, function(err){
							console.log(err);
							
						});
				},

				logout: function(){
					$cookies.remove(LOGGED_USER);
				},
				
				isLogged: function(){
					return $cookies.get(LOGGED_USER);
				}

			};
		
		}]);

	
})();
