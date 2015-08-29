  portfolioApp.controller("PortfolioListController",
   function($scope, $firebaseArray, FIREBASE_URL){

    $scope.portfolios = [];

    var ref = new Firebase(FIREBASE_URL);
    var postRef = ref.child('portfolios');
    $scope.portfolios = $firebaseArray(postRef);

    var imageUpped;

    $scope.addImage = function( new_image ) {
      // this is Daniel's key
      filepicker.setKey("AgTJpb5i3RlKpbtqVuZSAz");
      filepicker.pick ( {
        mimetype: 'image/*',
        container: 'window',
        services: ['COMPUTER']
      },
      function(Blob){
        console.log(JSON.stringify(Blob));
        imageUpped = Blob.url;
      },
      function(FPerror){
        console.log(FPerror.toString());
      }
    )};

    $scope.addPortfolio = function( new_portfolio ) {
      var pushRef = new Firebase(FIREBASE_URL + '/portfolios');
      pushRef.push({
        name: new_portfolio.name,
        creationdate: Firebase.ServerValue.TIMESTAMP,
        date: new_portfolio.date,
        title: new_portfolio.title,
        description: new_portfolio.description,
        imageurl: imageUpped
      });
      $scope.add_portfolio = {};
    };

  });
