$(document).ready(function(){
// Hide the answer when first loading the page
$("#answer").hide();

// Create the answers to the questions
  var answers = [
     "It is certain",
     "It is decidedly so",
     "Without a doubt",
     "Yes, definitely",
     "You may rely on it",
     "As I see it, yes",
     "Most likely",
     "Outlook good",
     "Yes",
     "Signs point to yes",
     "Reply hazy try again",
     "Ask again later",
     "Better not tell you now",
     "Cannot predict now",
     "Concentrate and ask again",
     "Don't count on it",
     "My reply is no",
     "My sources say no",
     "Outlook not so good",
     "Very doubtful",
    ];

  $(".button").click( function() {
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    var msg = answers[Math.floor(Math.random()*answers.length)];
    $("#answer").text(msg);
    $("#8ball").effect("shake");
    $("#answer").fadeIn(4000);
  });


});  //end of jquery declaration
