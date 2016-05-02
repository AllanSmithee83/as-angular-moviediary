angular.module('app.core').controller('SearchController', function(MovieService, $timeout){
    var vm = this;
    vm.results = false;
    vm.searching = false;
    vm.currentPage = 1;
    vm.totalResults = 0;
    vm.query = function(query) {
        vm.searching = true;
        MovieService.search(query, vm.currentPage).then(function(response){
            vm.results = response.results;
            vm.totalResults = response.total_results;
            $timeout(function(){
                vm.searching = false;
            }, 500);
        });
    };
    vm.typeahead = function(query) {
        return MovieService.search(query, 1).then(function(response){
            return response.results.map(function(movie){
                return movie.title;
            });
        });
    };
});
