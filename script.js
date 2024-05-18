// window size banner
  
function jqUpdateSize(){
    // Get the dimensions of the viewport
    // var width = $(window).width();
    var height = $(window).height();
  
    // $('#jqWidth').html(width);
    $('#jqHeight').html(height);
  
    $('.home-hero').css({ 
    height:  $(window).height(),
    overflow:" hidden"});
  
  }
  $(document).ready(jqUpdateSize);    // When the page first loads
  $(window).resize(jqUpdateSize);     // When the browser changes size