var shiftWindow = function() { scrollBy(0, -56) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

(function($){
  $(function(){

    $('.button-collapse').sideNav({
closeOnClick: true,
'edge': 'left'
});
$('.collapsible').collapsible();

  });
})(jQuery); // end of jQuery name space