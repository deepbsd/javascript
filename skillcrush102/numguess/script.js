$(document).ready( function() { 
  

   var num = Math.floor(Math.random() * 100) + 1;
   var guess = prompt("What number is your guess? ");


   while (guess != num) {
     if (guess > num) {
       $("#howIdid").append("<p>You guessed "+guess+" Too high!</p>");
       guess = prompt("Your number was too high.  Next guess? "); 
     }else if (guess < num) {
       $("#howIdid").append("<p>You guessed "+guess+" Too low!</p>");
       guess = prompt("Your number was too low.  Next guess? ");
     }else {
       continue;
   }
   };
  
  $("#howIdid").append("<p>Yaaay!  You guessed "+guess+". You got it right!</p>");
   alert("Success!  You guessed it!");

});
