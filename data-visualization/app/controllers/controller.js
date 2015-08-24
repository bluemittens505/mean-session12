app.controller('graphController', 
    function($scope, $firebaseArray, FIREBASE_URL){

var ref = new Firebase(FIREBASE_URL + '/data');
$scope.graphData = $firebaseArray(ref);

    $scope.width = 600;
    $scope.height = 400;
    $scope.yAxis = "Booty Haul";
    $scope.xAxis = "2015";

//     $scope.data = [
//     {
//         label: 'January',
//         value: 36
//     },
//     {
//         label: 'February',
//         value: 54
//     },
//     {
//         label: 'March',
//         value: 62
//     },
//     {
//         label: 'April',
//         value: 82
//     },
//     {
//         label: 'May',
//         value: 96
//     },
//     {
//         label: 'June',
//         value: 104
//     },
//     {
//         label: 'July',
//         value: 122
//     },
//     {
//         label: 'August',
//         value: 152
//     },
//     {
//         label: 'September',
//         value: 176
//     },
//     {
//         label: 'October',
//         value: 180
//     },
//     {
//         label: 'November',
//         value: 252
//     },
//     {
//         label: 'December',
//         value: 342
//     }
//     ];


// var refTwo = new Firebase("https://scorching-torch-2475.firebaseio.com/data");

// var postRef = refTwo.child('dataThree');

// ref.set($scope.data);



    $scope.max = 342;

    // var arrLength = $scope.data.length;
    // for (var i =0; i < arrLength; i++){
    //     if($scope.data[i].value > $scope.max){
    //         $scope.max = $scope.data[i].value;
    //     }
    // }
            // console.log($scope.max);
});













