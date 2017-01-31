
$( function fizzBuzz() {
   
   $('#number-chooser').submit( function(event) {
     var numberIn = parseInt($('#number-choice').val());
      
     if (!numberIn.isNaN) {
      
       for (var i=1; i <= numberIn; i++){
         if (i%3 === 0 && i%5 === 0){
           $('.js-results').append('<div class="fizz-buzz-item fizzbuzz"><span>FizzBuzz</span></p>');
         }else if (i%5 === 0){
           $('.js-results').append('<div class="fizz-buzz-item buzz"><span>Buzz</span></p>');
         }else if (i%3 === 0) {
           $('.js-results').append('<div class="fizz-buzz-item fizz"><span>Fizz</span></p>');
         }else {
           $('.js-results').append('<div class="fizz-buzz-item"><span>'+i+'</span></p>');
         }  // end of if stmt
       }  // end of for loop
     }  // end of if !numberIn.isNaN
     
     
   });  // end of $(number-choice).input function


});