var mySample=angular.module("mySampleApp",["ngRoute"]);
	
	mySample.config(function($routeProvider){
		$routeProvider.when('/registration',{
			templateUrl:'templates/regMain.htm'
		}).when('/forgotPage',{
			templateUrl:'templates/forgot.htm'
		}).otherwise({
			templateUrl:'templates/main.htm'
		});
	});
mySample.controller("mySampleController",function($scope,$location){

	$scope.redirect=function(pageType){
		if(pageType=='registration'){
			$location.url('/registration');
		}
		if(pageType=='forgot'){
			$location.url('/forgotPage');
		}
		if(pageType=='login'){
 			$location.url('/');
 		}
	};

});

mySample.controller("registerController",function($scope,$location){
	$scope.validate = function(){
		if($scope.Password == $scope.rePw){
		$('.errMsg1').show();
		$('.errMsg2').hide();
	}else{
		$('.errMsg2').show();
		$('.errMsg1').hide();
	}
}

	$('#modal').click(function(){
		$('.mainContent').toggleClass('change');
		$('.rigisterFOrm').toggle(1000);
	});
	$('#buttn1').click(function(){
		if($scope.Password == $scope.rePw){
			alert("ur data is saved");
			$location.url('/');
		}
	});
	



});

