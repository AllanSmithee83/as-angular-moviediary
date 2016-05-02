angular.module('app.core').controller('MyMoviesController', function(StoreFactory){
    var vm = this;
    vm.results = StoreFactory.getMovies();
});
