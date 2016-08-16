var button_black = document.getElementById("b_black");
var button_cow = document.getElementById("b_cow");
var button_orange = document.getElementById("b_orange");

var black = document.getElementById("black");
var cow = document.getElementById("cow");
var orange = document.getElementById("orange");

var button_lights = document.getElementById("lights");


button_black.addEventListener("click", function() {
  // do something when the button is clicked
  if (black.style.display == "block") {
    black.style.display = "none";
  }else{
    black.style.display = "block";
  }
});


button_cow.addEventListener("click", function() {
  // do something when the button is clicked
  if (cow.style.display == "block") {
    cow.style.display = "none";
  }else{
    cow.style.display = "block";
  }
});


button_orange.addEventListener("click", function() {
  // do something when the button is clicked
  if (orange.style.display == "block") {
    orange.style.display = "none";
  }else{
    orange.style.display = "block";
  }
});

button_lights.addEventListener("click", function() {
  // when the button is clicked, then...
  if (document.body.style.background == "white") {
    document.body.style.background = "black";
  }else{
    document.body.style.background = "white";
  }
});
