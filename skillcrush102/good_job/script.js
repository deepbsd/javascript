$(document).ready(function() {
  // attach a click event to the button
  $('#my-button').click(function() {
    // set the animation to start after one second
    setTimeout(function() {
      // fade in the header slowly
      $('#my-header').fadeIn('slow', function() {
        // when the header is done fading in, fade out slowly
        $('#my-header').fadeOut('slow', function() {
          // when the header is done fading out,
          // fade it in quickly and change its color
          $('#my-header').fadeIn('fast').css('color', '#B0171F');
        });
      });
    }, 1000);
  });
});
