/*
Summation of primes
Problem 10
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/
$(document).ready( function() {

    function isPrime(n) {
      if (n === 1) { return false;}
      if (n === 2) { return true; }
      var sqrt_n = Math.round(Math.floor(Math.sqrt(n)));
      for (var i=2; i<=sqrt_n + 1; n++) {
        if (n % i === 0) { return false; }
	return true;
      }
    }

    var sum = 2;
    var limit = 2e+6;

    for (var i=3; i<=limit; i+=2) {
      if (isPrime(i)===true) { sum+=i; }
    }

    console.log(sum);

    $("#output").text("Sum is " + sum );

});

