

$(document).ready(function() {
	resizeCard();
	$.ajax({
        url: 'data.json',
        dataType: 'json',
        success: function(data){
            $.each(data, function(k, v) {
			    var activeClass = '';
			    var ariaExpanded = ''
			    var accordionShow = '';
			    if (k == 0) {
			      activeClass = 'active';
			      ariaExpanded = true;
			      accordionShow = 'show';
			    }

			    var accHead = '<div class="card-header" id="heading-'+k+'"><h5 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#collapse-'+k+'" aria-expanded="'+ariaExpanded+'" aria-controls="collapse-'+k+'">'+v.title+'</button></h5></div>';
			    var accCont = '<div id="collapse-'+k+'" class="collapse '+accordionShow+'" aria-labelledby="heading-'+k+'" data-parent="#accordion"><div class="card-body">'+v.content+'</div></div>';
			    var accCode = '<div class="accordion-entry">'+accHead+accCont+'</div>'

			    $('#accordion').append(accCode);

			    $('.custom-tab').append('<li class="nav-item"><a class="nav-link '+activeClass+'" href="#tab-'+k+'" data-toggle="tab"><span>'+v.title+'</span></a></li>');
			    $('.tab-content').append('<div id="tab-'+k+'" class="tab-pane '+activeClass+'">'+v.content+'</div>')
			});
        }
    });
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