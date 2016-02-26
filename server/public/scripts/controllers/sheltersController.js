myApp.controller('sheltersController', ['$scope', '$http', function($scope, $http) {

    $scope.data = {};

    $scope.sheltersFinder = function(zip) {
        console.log(zip);
        // API key
        var key = '5ac82314a4f2c2a8b046428dbca4b0fb';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'shelter.find';
        query += '?key=' + key;
        query += '&location=' + zip;
        query += '&count=10';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                //console.log(response.data);
                $scope.shelters = response.data.petfinder.shelters.shelter;
                console.log($scope.shelters);
            }
        );
    }
}]);