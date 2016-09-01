/*
Project Euler -- Problem 3
Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

$(document).ready( function() {

  bignumber = 600851475143;
  i = 2;


  while (i*i < bignumber){
    while (bignumber % i == 0) {
      bignumber = bignumber / i;
      $("#output").append("<li>i is: " + i + ", number is: " + bignumber + "</li>");
    }
    i = i + 1;
  }

  $("body").append("<h4>Largest prime factor is " + bignumber + "</h4>");

});
