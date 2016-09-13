/*  Script to change the background/foreground colors when button is clicked */

$(document).ready(function() {
    function changeColor() {
        return '#' + Math.random().toString(16).slice(2,8);
    };

    $("#button").on("click", function () {
        $("#changemycolor").css("background-color", changeColor());
	$('#button').css('background-color', changeColor());
	$('#button').css('color', changeColor());
    
    });

});
