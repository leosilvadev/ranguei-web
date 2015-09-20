(function(){

	'use strict';

	angular.module('ranguei.facebook.services')
		.service('userAccess', ['$cookies', function($cookies){
		
			var LOGGED_USER = 'LOGGED_USER';

			return {
			
				login: function(user){
					$cookies.put(LOGGED_USER, user);
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
