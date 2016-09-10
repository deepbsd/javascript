/*
10001st prime
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that
the 6th prime is 13.

What is the 10 001st prime number?
*/
$(document).ready( function() {

  // Is n a prime number??
  function isPrime(n) {
    if (n == 1)  return false;

    var sqrt_n = Math.floor(Math.sqrt(n));

    for (var i = 2; i <= sqrt_n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }   // End of isPrime()



  // Return a list of primes up to limit
  function genPrimes(lim) {

    var primes = [];

    for (var i = 2; i <= lim; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }

    return primes;
  }  // End of genPrimes()

maxnum = 105000;  // We'll need this number to get 10000 prime numbers...

allprimes = genPrimes(maxnum);  // Get an array of only prime numbers up to 10001


// Finally, output the answer...
$("#output").text(allprimes[10000]);  // index starts from 0...

});
