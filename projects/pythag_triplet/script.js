/*
Special Pythagorean triplet
Problem 9
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
For example, 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/
$(document).ready( function() {

   // Start with numbers between 150 and 450...
   function findPy() {
     var values = [];
     for (var a=150; a<=450; a++){
       for (var b=150; b<=450; b++) {
         for (var c=150; c<=450; c++) {
	   // 3 requirements: a<b<c && a+b+c = 1000 && a**2+b**2=c**2
           if ((a<b) && (b<c) && (a+b+c===1000) && (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2))) {
	     values = [a,b,c];
	   }
         }
       }
     }
     return values;
   }

   var values = findPy();

   var a = values[0];
   var b = values[1];
   var c = values[2];

    $("#output").text("Product is " + a*b*c + " and ABC are A: "+a+" B: "+b+" C: "+c+".");

});

