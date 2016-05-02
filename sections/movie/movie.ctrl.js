angular.module('app.core').controller('MovieController', function(data){
    var vm = this;
	vm.data = data;
	vm.newEntry = {};
	
	
	
	 vm.saveEntry = function() {
        if (vm.data.diary_entries == undefined) {
            vm.data.diary_entries = [];
        }
        vm.newEntry.date = new Date();
        vm.data.diary_entries.push(vm.newEntry);
        vm.newEntry = {};
    };
    vm.removeEntry = function($index) {
        vm.data.diary_entries.splice($index, 1);
    };
	
	
});
