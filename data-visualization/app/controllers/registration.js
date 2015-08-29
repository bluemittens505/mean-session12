app.controller('registration', 
    function($scope, $location, FIREBASE_URL, $firebaseAuth, Authentication ){

    // $scope.firstname = "Daniel";

    var ref = new Firebase(FIREBASE_URL);
    var auth = $firebaseAuth(ref);

    auth.$onAuth(function(authData){
        if(authData !== null) {
            var userDataRef = new Firebase(FIREBASE_URL + '/users');
            userDataRef.orderByChild("email").equalTo(authData.password.email).on("child_added", function(snapshot) {
                $scope.firstname = snapshot.val().firstname;
                // apply not normally done, but needed here because outside
                // it's digest loop  ???
                $scope.$apply();
            });
        }
    })

    $scope.logout = function () {
        auth.$unauth();
        $location.path("/login");
        window.location.reload();
    }
    
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

















