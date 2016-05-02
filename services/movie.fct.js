angular
    .module('app.services')
    .constant('API_KEY', '3ad862b59229ab1d3865e58f3a9ba8b1')
    .constant('BASE_URL', 'http://api.themoviedb.org/3')
    .factory('MovieService', dataService);

function dataService($http, API_KEY, BASE_URL, $log) {
    var data = {
        'get': get,
        'search': search,
        
    };
    function makeRequest(url, params) {
        var requestUrl = BASE_URL + '/' + url + '?api_key=' + API_KEY;
        angular.forEach(params, function(value, key){
            requestUrl = requestUrl + '&' + key + '=' + value;
        });
        return $http({
            'url': requestUrl,
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json'
            },
            'cache': true
        }).then(function(response){
            return response.data;
        }).catch(dataServiceError);
    }
    function get(id) {
        return makeRequest('movie/' + id, {});
    }
    function search(query, page) {
        return makeRequest('search/movie', {query: query, page: page}).then(function(data){
            return data;
        });
    }
   
    return data;

    function dataServiceError(errorResponse) {
        $log.error('XHR Failed for MovieService');
        $log.error(errorResponse);
        return errorResponse;
    }
}