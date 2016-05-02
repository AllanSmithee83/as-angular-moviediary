angular
    .module('app.routes', ['ngRoute'])
    .config(routes);

function routes($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'sections/home/home.tpl.html',
            controller: 'HomeController as home'
        })
   
		 .when('/my-movies', {
            templateUrl: 'sections/my-movies/my-movies.tpl.html',
            controller: 'MyMoviesController as mymovies'
        })
   
        .when('/search', {
            templateUrl: 'sections/search/search.tpl.html',
            controller: 'SearchController as search'
        })
           
        .when('/movie/:id', {
            templateUrl: 'sections/movie/movie.tpl.html',
            controller: 'MovieController as movie',
			resolve: {
                data: function(StoreFactory, $route) {
                    return StoreFactory.getMovie($route.current.params.id);
                },
			}	
        
        })
        .otherwise({
            redirectTo: '/'
        });
}