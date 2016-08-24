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
$("#bigsum").text("Big Summation: "+sum);

});

