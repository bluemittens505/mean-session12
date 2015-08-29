  portfolioApp.controller("PortfolioViewerController",
    function($scope, $routeParams, FIREBASE_URL, $firebaseArray, $firebaseObject){

  	$scope.portfolio_name = $routeParams.portfolio_name;

   	var portfolios = {};

    var imgRef = new Firebase(FIREBASE_URL + '/images/' + $scope.portfolio_name);
    $scope.portfolios = $firebaseArray(imgRef);

  });













