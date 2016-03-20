angular.module('SameDomainRequest', [])
    .controller('myController', function ($scope, $http) {
        $scope.getJSONData = function () {
            $http({
                url: 'https://api.flickr.com/services/rest',
                method: 'GET',
                params: {
                    method: 'flickr.photos.search',
                    api_key: 'e12e5a3fcefd432c67a2d131c32afafc',
                    tags: 'b27baad848d8f597',
                    format: 'json',
                    nojsoncallback: 1
                }
            })

            .then(function (data, status, headers, config) {
                    console.log('Success!');
                    // called when the data is available
                },
                function (data, status, headers, config) {
                    console.log('Failure :(');
                    // called when an error occurs or
                    // the server returns data with an error status
                });

        };
    });
