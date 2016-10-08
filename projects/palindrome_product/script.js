/*
Largest palindrome product
Problem 4
A palindromic number reads the same both ways. The largest palindrome made from
the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

$(document).ready( function() {

	function ispal(num) {
	  if (num.toString() === num.toString().split("").reverse().join("")) {
	    return true;
	  } else {
	    return false;
	  }
	}

	var maxval = 0;
	var fac1 = 0;
	var fac2 = 0;

	for (n1 = 100; n1 <= 999; n1++) {
	  for (n2 = n1; n2 <= 999; n2++) {
	    product = n1 * n2;
	    if (ispal(product) && (product > maxval)) {
	      maxval = product;
	      fac1 = n1;
	      fac2 = n2;
	    }
	  }
	}

	//console.log("The answer is "+maxval+" = "+fac1+" x "+fac2);

	$("#output").text(" "+maxval+" = "+fac1+" x "+fac2);

});
