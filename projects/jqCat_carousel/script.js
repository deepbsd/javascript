// Thinkful Prep Course:  jQuery Cat Carousel challenge
/*
In this challenge, you need to write JavaScript that provides the following 
experience: when a user clicks on one of the thumbnail images, that image 
should be displayed in the full size image container at the top.
*/

$( function handleClicks() {
   
  $('a img').on('click', function() {
    
    var newSrc = this.src;

    $("img.orig").attr('src', newSrc).show();
       
  });
  

});

