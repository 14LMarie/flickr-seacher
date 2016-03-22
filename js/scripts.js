angular.module('SameDomainRequest', [])
    .controller('myController', function ($scope, $http) {
        $scope.results = [];
        $scope.isSearching = false;
        $scope.totalNumResults = true;
        $scope.getJSONData = function () {
            $scope.isSearching = true;
            $http({
                url: 'https://api.flickr.com/services/rest',
                method: 'GET',
                params: {
                    method: 'flickr.photos.search',
                    api_key: 'e12e5a3fcefd432c67a2d131c32afafc',
                    text: $scope.searchTerm,
                    format: 'json',
                    nojsoncallback: 1
                }
            }).success(function (data) {
                $scope.results = data;
                $scope.isSearching = false;
                $scope.totalNumResults = false;
                $scope.searchTerm = '';
                console.log(data.photos.total);
            }).error(function (error) {
                console.error(error);
                $scope.isSearching = true;
            });

        };

    });
