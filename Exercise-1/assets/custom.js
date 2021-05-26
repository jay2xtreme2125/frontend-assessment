$(document).ready(function() {
	resizeCard();
});
var resizeTimer;
$(window).on('resize', function(e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
	resizeCard();            
  }, 300);

});


function resizeCard() {
	var max_height = 0;
	$('.card-text').each(function() {
		max_height = Math.max($(this).height(), max_height);
	});
	$('.card-text').each(function() {
	  $(this).height(max_height);
	}); 
}