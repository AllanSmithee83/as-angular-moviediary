angular
    .module('app.services')
    .factory('StoreFactory', dataService);

function dataService(localStorageService, $rootScope) {

    var _movies = [];

    var ls = localStorageService.get('store');
    if (ls !== null) {
        _movies = ls;
    }

    var service = {
        'addMovie': addMovie,
        'getMovie': getMovie,
        'getMovies': getMovies,
		'removeMovie': removeMovie
    };

    function addMovie(data) {
        _movies.push(data);
        save();
    }

    function getMovie(id) {
        var result = false;
        angular.forEach(_movies, function(movie){
            if (result === false) {
                if (movie.id == id) {
                    result = movie;
                }
            }
        });
        return result;
    }

    function getMovies() {
        return _movies;
    }

    function removeMovie(id) {
        var idx = -1;
        var found = false;
        angular.forEach(_movies, function(movie){
            if (found === false) {
                if (movie.id === id) {
                    found = true;
                }
                idx++;
            }
        });
        if (found === true) {
            _movies.splice(idx, 1);
            save();
        }
    }

    function save() {
        localStorageService.set('store', _movies);
    }

    $rootScope.$watch(function(){
        return _movies;
    }, function(){
        save();
    }, true);

    return service;
}