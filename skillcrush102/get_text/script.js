$(document).ready( function() {
  //We want to load text from an external text file...
  var filetext;

  $.ajax({
    type: "GET",
    url: "text.txt",
    async: false,
    dataType: "text",
    success: function (data) {
      filetext = data;
    }
  });

  $("#external_text").text(filetext);

});
