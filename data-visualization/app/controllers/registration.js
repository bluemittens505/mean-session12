app.controller('registration', 
    function($scope, $location, FIREBASE_URL, $firebaseAuth, Authentication ){

    // $scope.name="Daniel";

    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);
    
    $scope.login = function() {
        Authentication.login($scope.user)
        .then(function(user){
            $location.path("/graph");
        }).catch(function(error){
            $scope.message = error.message;
        });
 } //login

    $scope.register = function() {
        Authentication.register($scope.user)
        .then(function(user){
            Authentication.login($scope.user);
            $location.path("/graph");
        }).catch(function(error){
            $scope.message = error.message;
        });
 } //register
});

















