$(document).ready(function() {
	$('ul#filter a').click(function() {
		$(this).css('outline','none');
		$('ul#filter .current').removeClass('current');
		$(this).parent().addClass('current');
		
		var filterVal = $(this).text().toLowerCase().replace(' ','-');
		
			$('ul#ts-display-pf-col-4 li.nomargin').removeClass('nomargin');
			var idx = 0;
			$('ul#ts-display-pf-col-4 li').each(function() {
				if(!$(this).hasClass(filterVal) && filterVal != 'all') {
					$(this).fadeOut(1000, 'linear').addClass('hidden');
				} else {
					idx++;
					if(idx%4==0){
						$(this).addClass('nomargin');	
					}
					$(this).fadeIn(1000, 'linear').removeClass('hidden');
				}
			});
		
		return false;
	});
});