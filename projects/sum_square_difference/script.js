// Sum Square difference, Euler problem 6...
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
