/*
Project Euler, Problem 1: Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get
3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

$(document).ready( function() {

// I guess I didn't need to put all this into an array.  I could have 
// just summed it up as I went, but I needed the practice.
var sum = 0;
var arr = [];

// create the array...
for (i=1;i<1000;i++){
  if (i%3 == 0 || i%5 == 0) { 
    arr.push(i);
  }
}

// sum the array...
$.each(arr, function() {
  $("#item").append("<li>"+this+"</li>");
  sum += this;
});

// print out the answer...
//console.log(sum);
$("#bigsum").text("Big Sum: "+sum);

});

