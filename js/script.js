//myApp app module
angular.module('myApp', [])
	//declaring a controller called MultiplicationCtrl and defining it as vm. 
	// the $attrs is used to pull in an initial value for the table size from your template
	// the $attr service provides a map of all the attributes present on the element which the ng-controller was placed on
	.controller('MultiplicationCtrl', function($attrs) {
		var vm = this;
		//a controller variable defined as vm.numberLimit that uses the $attr service
		//if the attribute is not set then the default is 10
		vm.numberLimit = $attrs.initialNumberLimit || 10;
		// vm.numbers is another defined controller variable as a function that returns an array of numbers 0 to the provided limit
		vm.numbers = function() {
			var numbers = [];
			for(var i=0; i < vm.numberLimit; i++) {
			    numbers[i] = i + 1;
			}
			return numbers;
        }
        //function to multiply a with b
        vm.compute = function(a,b) {
        	return a * b;
        }
	})