/*
Smallest multiple
Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to
10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?
*/
$(document).ready( function() {

	function leastCM(min, max) {
	  function range(min, max) {
	    var arr = [];
	    for (var i = min; i <= max; i++) {
	      arr.push(i);
	    }
	    return arr;
	  }

	  function gcd(a, b) {
	    return !b ? a : gcd(b, a % b);
	  }

	  function lcm(a, b) {
	    return (a * b) / gcd(a, b);
	  }

	  var multiple = min;
	  range(min, max).forEach(function(n) {
	    multiple = lcm(multiple, n);
	  });

	  return multiple;
	}

	// Here's where we call function with 1 and 20...
	var output = leastCM(1, 20);

	$("#output").text(output);

});
