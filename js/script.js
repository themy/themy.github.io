/**
 * @name Site
 * @description Define global variables and functions
 * @version 1.0
 */
var Site = (function ($, window, undefined) {
  var privateVar = 1;

  function sectionHeight(){
    $('#main > section').css('height', window.innerHeight);
  }

  $(document).ready(function(){
  
    $(window).resize(function(){
      sectionHeight();
    }).trigger('resize');
  });



})(jQuery, window);

