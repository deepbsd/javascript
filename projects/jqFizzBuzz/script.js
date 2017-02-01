
$( function fizzBuzz() {


   
   $('#number-chooser').submit( function(ev) {

     var numberIn = parseInt($('#number-choice').val());
      ev.preventDefault();
     if (!numberIn.isNaN) {
        $('.js-results').html('');

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

/*     Looking at a different idea here...
$('#my-form-element').submit(function (ev) {
  // ev is an abbreviation of event - which is a reserved word in JavaScript
  // and should not be used as variable name

  // it prevents the default browser behavior - which redirects you to a
  // new page
  ev.preventDefault()

  var form = $(ev.target)
  // here you do some work with your form element
})
*/