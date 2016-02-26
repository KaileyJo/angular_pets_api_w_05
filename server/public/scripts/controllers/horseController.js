myApp.controller('horseController', ['$scope', '$http', function($scope, $http) {

    $scope.data = {};

    function horseFinder() {
        // API key
        var key = '5ac82314a4f2c2a8b046428dbca4b0fb';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=horse';
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                //console.log(response.data);
                $scope.horse = response.data.petfinder.pet;
                console.log($scope.horse);
            }
        );
    }

    horseFinder();
}]);