angular.module('SameDomainRequest', [])
    .controller('myController', function ($scope, $http) {

        $scope.getJSONData = function () {
            $scope.isSearching = true;
            $http({
                url: 'https://api.flickr.com/services/rest',
                method: 'GET',
                params: {
                    method: 'flickr.photos.search',
                    api_key: 'e12e5a3fcefd432c67a2d131c32afafc',
                    text: 'cat',
                    format: 'json',
                    nojsoncallback: 1
                }
            }).success(function (data) {
                $scope.results = data;
                $scope.isSearching = false;
            }).error(function (error) {
                console.error(error);
                $scope.isSearching = true;
            });

        };

    });
