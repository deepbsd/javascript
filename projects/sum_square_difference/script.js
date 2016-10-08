/*
Sum square difference
Problem 6
The sum of the squares of the first ten natural numbers is,

1<sup>2</sup> + 2<sup>2</sup> + ... + 10<sup>2</sup> = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)<sup>2</sup> = 55<sup>2</sup> = 3025
Hence the difference between the sum of the squares of the first ten natural
numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred
natural numbers and the square of the sum.
*/
$(document).ready( function() {

  nums1 = [];   //Array of first 100 numbers
  i = 1;
  while(nums1.push(i++) < 100 ) {};
  sum = 0;
  nums1.forEach( function(n) { sum += n });
  square_of_sum = sum * sum;

  sum = 0;
  nums1.forEach( function(n) { sum += n*n });
  sum_of_squares = sum;

  answer = square_of_sum - sum_of_squares;


  $("#output").text(answer);

});
