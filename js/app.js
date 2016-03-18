angular.module('myApp', [])
    .controller('myController', function ($http, $scope) {

        var url = "https://api.flickr.com/services/rest";
        var request = {
            method: 'flickr.photos.search',
            api_key: 'e12e5a3fcefd432c67a2d131c32afafc',
            tags: 'b27baad848d8f597',
            format: 'json',
            nojsoncallback: 1
        };

        $http({
                method: 'GET',
                url: url,
                params: request
            })
            .then(function (data, status, headers, config) {
                    console.log('Success!');
                },

                function (data, status, headers, config) {
                    console.log('Failure');
                });
    });
});
