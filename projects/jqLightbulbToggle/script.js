$( function lightbulbToggle() {
  
  $('.lightbulb').on("click", function() {
    $('.lightbulb').removeClass("bulb-on");
    $(this).toggleClass("bulb-on");
  });
  
})