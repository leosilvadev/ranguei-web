(function(){
	
	'use strict';
	
	angular.module('ranguei.facebook.controllers', ['facebook', 'ranguei.facebook.services']);
	
	angular.module('ranguei.facebook.controllers').config(['FacebookProvider',function(FacebookProvider) {
		FacebookProvider.init('---------');
	}]);
	
	angular.module('ranguei.facebook.controllers')
		.controller('FacebookManagerController', ['$scope', 'Facebook', 'userAccess', function($scope, Facebook, userAccess){
		
			$scope.intentLogin = function() {
				if(!$scope.loggedin()) {
					$scope.login();
				}
			};
		    
			$scope.login = function() {
				Facebook.login(function(response) {
					if (response.status == 'connected') {
		            $scope.me();
					}
				});
			};
		    
			$scope.me = function() {
				Facebook.api('/me', function(response) {
					$scope.$apply(function() {
						userAccess.login(response);
					});
				});
			};
		    
			$scope.logout = function() {
				Facebook.logout(function() {
					$scope.$apply(function() {
						userAccess.logout();
					});
				});
			};

			$scope.loggedin = function(){
				return userAccess.isLogged();
			};
		}]);
})();
