(function(){

	'use strict';

	angular.module('ranguei.facebook.directives', []);

	angular.module('ranguei.facebook.directives').directive('facebookManager', function(){
	
		return {
			restrict: 'EA',
			controller: 'FacebookManagerController',
			templateUrl: 'modules/facebook/views/facebook.html'
		};

	});

})();
