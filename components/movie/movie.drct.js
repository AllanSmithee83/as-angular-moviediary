angular.module('app.core').directive('movieOverview', function(StoreFactory){
    return {
        templateUrl: 'components/movie/movie.tpl.html',
        restrict: 'E',
        scope: {
            movie: '=',
            movieRating: '=',
			movieDiary: '='
        },
        controller: function($scope) {
            $scope.trackMovie = function(movie) {
                StoreFactory.addMovie(movie);
            };
            $scope.unTrackMovie = function(id) {
                StoreFactory.removeMovie(id);
            };
            $scope.hasMovie = function(id) {
                return (StoreFactory.getMovie(id) !== false);
            };
        }
    };
});