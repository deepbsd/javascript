// First, put everything into a document.ready statement...
$(document).ready( function() {

/*
 * Begin modal controls
 */

// I refactored the class-provided code to be a little more succinct
$("#modal-show").click(function(){
  $("#modal-container").show();
});

$("#modal-hide").click(function() {
  $("#modal-container").hide();
});


var handleNewsletterSignup = function(evt) {
  evt.preventDefault(); // don't ACTUALLY send the form ;)

  $("#newsletter-header").text("Thank you for signing up!");

  var newsletterForm = $("#newsletter-signup").hide();
};

 $("#newsletter-signup").on("submit", handleNewsletterSignup);
/*
 * End modal controls
 */

// extra hover event
$('#more-bio').hover( function() {
   $('#extra-bio').fadeToggle('slow');
});


/*
 * Begin clock code (Which I borrowed and pimped out a little bit...)
 */
var clockTime = function() {
  var currentTime = new Date();

  //  Add a month variable...
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  // Add a day variable...
  var day = new Array();
  day[0]  = "Sunday";
  day[1]  = "Monday";
  day[2]  = "Tuesday";
  day[3]  = "Wednesday";
  day[4]  = "Thursday";
  day[5]  = "Friday";
  day[6]  = "Saturday";

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // This is easier to read than var? val_if_true : val_if_false;
  if (hours <= 11) {
    var period = "AM";
  } else {
    var period = "PM";
  }

  // Could use (hours>12)? hours=hours-12 : hours = 12;
  if (hours > 12) {
    hours = hours - 12;
  } else if (hours === 0) {
    hours = 12;
  }

  // Could use minutes<10 ? minutes = "0" + String(minutes) : String(minutes);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  var time_date = day[currentTime.getDay()] + ", " + month[currentTime.getMonth()] + " " + currentTime.getDate() + ", " + currentTime.getFullYear() + "  =====>  [ " + hours + ':' + minutes + ':' + seconds + ' ' + period + " ]";

  return time_date;
}

var clock = $("#clock");

setInterval(function() {
  clock.text(clockTime());
}, 1000);
/*
 * End clock code
 */
});   // End of script
