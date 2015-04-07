var angularRecipes = angular.module("angularRecipes",['ngRoute']);


angularRecipes.config(['$routeProvider',function($routeProvider){
		$routeProvider.
			when('/',{
				templateUrl:'templates/index',
				controller: "recipesCtrl"
			})
	}
])

angularRecipes.controller("recipesCtrl",function($scope){
  $scope.recipes = [
    {
    name :"Ceasar Salad",
    ingredients:["chicken","lettuce"],
    time:"8'"
    },
    {
    name :"Lupus Salad",
    ingredients:["lupus","lettuce"],
    time:"18'"
    },
    {
    name :"Tomatoe Salad",
    ingredients:["tomatoe","lettuce"],
    time:"4'"
    },
    {
    name :"Hamburger NY",
    ingredients:["meat",
                 "bread",
                 "egg",
                 "lettuce",
                 "bacon"],
    time:"25'"
    },
    {name :"Hamburger Argentina",
    ingredients:["meat",
                 "bread",
                 "cucumber",
                 "lettuce",
                 ],
    time:"15'"
    }

  ]
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

