// Okay, I "borrowed" this from StackOverflow.  
// http://stackoverflow.com/questions/6789714/javascript-for-project-euler-problems
// At least it doesn't bring your browser to a crushing stall!  :-D
$(document).ready( function() {

function sieveEratosthenes() {
  var i, j, k, l = Math.floor((2000000-1)/2), a = [];
  for (i = 0; i< l; i++) {
    a[i] = true;
  } var m = Math.sqrt(2000000);
  for ( i = 0; i <= m; i++) {
    if (a[i]) {
      j = 2 * i + 3;
      k = i + j;
      while (k < l) {
        a[k] = false;
	k += j;
      }
    }
  } var s = 2;
  for (i = 0; i < l; i++) {
    if (a[i]) {
      s += 2 * i + 3;
    }
  }
  return s;
}

var start = new Date().getTime();
var answer = sieveEratosthenes();
var end = new Date().getTime();

$("#output").text("The sum is "+answer+" (in "+(end-start)+" milliseconds).")

});
