$(document).ready(function(){

// variables
var wakeuptime = 9; // 9AM
var lunchtime = 12; // 12PM
var partytime = 17; // 5PM
var naptime = lunchtime + 2; // 2PM


// overall function for lolcat clock
var updateClock = function() {

var messageText;
var now = new Date().getHours();



var clockOut = document.getElementById("clock");
var timeEventOut = document.getElementById("timeEvent");
var lolcatImg = document.getElementById("lolcat");


// for debugging purposes...
// var now = 20;

switch ( true ) {

   case ( now == wakeuptime ):  // wake up time
    messageText = "IZ WAKE UP TIME!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    break;

   case ( now == lunchtime ):   // lunch time
    messageText = "IZ LUNCH TIME!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    break;

   case ( now == naptime ):   // nap time
    messageText = "IZ NAP TIME!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    break;

   case (now == partytime):   // partee time
    messageText = "IZ PARTEE TIME!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    break;

    default:
    messageText = "IZ KITTY TIME!";  // kitty time (default)
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
}

var showTime = function() {

  // grab the clock from the html
  var clock = document.getElementById('clock');
  var time = new Date();   // create the base object for the clock

  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var meridian;

  // format the time values according to current time
  (hours >= 12) ? meridian = "PM" : meridian = "AM";
  (hours > 12) ? hours = hours - 12 : hours = hours;
  (minutes < 10) ? minutes = "0" + minutes : minutes = minutes;
  (seconds < 10) ? seconds = "0" + seconds : seconds = seconds;
  var clockString = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

  clock.innerText = clockString;

}  // end of showTime() function

showTime();

/*  // debugging...
console.log(now);
console.log(image);
console.log(messageText);
*/


lolcatImg.src = image;
timeEventOut.innerText = messageText;

};  // end of updateClock() function


setInterval(updateClock, 1000);


// For Party Time button!
//var button = document.getElementById("partyTimeButton");
var parteeTime;

$("#partyTimeButton").click( function() {
  if (parteeTime < 0) {
    parteeTime = new Date().getHours();
    $("#partyTimeButton").text("Party Over.");
    $("#partyTimeButton").css("color", "#0A8DAB");

  } else {
    parteeTime = -1;
    $("#partyTimeButton").text("PARTAY TIME!");
    $("#partyTimeButton").css("color","white");
  }

});

//button.addEventListener("click", partyEvent);

// Now for the time selector buttons...
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var wakeUpEvent = function(){
  wakeuptime = wakeUpTimeSelector.value;
};

var lunchTimeEvent = function(){
  lunchtime = lunchTimeSelector.value;
};

var napTimeEvent = function() {
  naptime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
napTimeSelector.addEventListener('change', napTimeEvent);


});  // end of jquery
