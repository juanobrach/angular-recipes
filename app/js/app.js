var angularRecipes = angular.module("angularRecipes",['ngRoute','ngTagsInput']);


angularRecipes.config(['$routeProvider',function($routeProvider){
		$routeProvider.
			when('/',{
				templateUrl:'templates/index',
				controller: "recipesCtrl"
			})
	}
])

angularRecipes.controller("recipesCtrl",function($scope,$http){
	/*
	* Call local database in json with $http
	*/
	var recipeJson = $http.get("assets/recipes.json").success(function(data){
		return $scope.recipes = data
		console.log(data)
	});


	/*Elements config*/
	  $scope.title = "What do you can eat";
	  $scope.heart = "fa fa-heart-o heart"
	  $scope.heartO ="fa fa-heart"
	  
	  $scope.change = function(){
				if($scope.heart === "fa fa-heart-o"){
	        		$scope.heart = "fa fa-heart"  
	      		}else{
	        		$scope.heart = "fa fa-heart-o"
	      		}
	  }

})

