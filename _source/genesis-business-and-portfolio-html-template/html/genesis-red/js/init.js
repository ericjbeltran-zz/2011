// JavaScript Documentvar 
$ = jQuery.noConflict();
$(document).ready(function () {
	if ($.browser.msie && $.browser.version < 7) return; // Don't execute code if it's IE6 or below cause it doesn't support it.
	$("#ts-thinkboxslider-quotecontainer").cycle({
		timeout : 0
	});
	$(".ts-thinkboxslider-thumbslide").click(function(){
		var idx = parseInt($(this).attr("title"));
		$("#ts-thinkboxslider-quotecontainer").cycle(idx);
		
		return false;
	});
	$(".ts-thinkboxslider-thumbcont").walkingPointer();
  
});


$ = jQuery.noConflict();
(function($) {
$.fn.walkingPointer = function(o) {
    o = $.extend({ fx: "linear", speed: 500, click: function(){} }, o || {});

    return this.each(function() {
        var me = $(this), noop = function(){},
            $pointer = $('.ts-thinkboxslider-pointer'),
            $thumbslide = $(".ts-thinkboxslider-thumbslide", this), curr = $(".tscurrentpointer", this)[0] || $($thumbslide[0]).addClass("tscurrentpointer")[0];
		var unusedLeft = $thumbslide[0].offsetLeft;
		var stcPointer = 7;


        $(this).click(noop);

        $thumbslide.click(function(e) {
			move(this);
			$thumbslide.removeClass("tscurrentpointer");
			$(this).addClass("tscurrentpointer");
			curr = $(this);
            return o.click.apply(this, [e, this]);
        });

        setCurr(curr);

        function setCurr(el) {
			var halfwidth = el.offsetWidth/2;
			halfwidth = parseInt(halfwidth);
			var bgPos = el.offsetLeft + halfwidth - unusedLeft - stcPointer;
            $pointer.css({ 'background-position': bgPos+"px 0px"});
            curr = el;
        };

        function move(el) {
			var halfwidth = el.offsetWidth/2;
			halfwidth = parseInt(halfwidth);
			var bgPos = el.offsetLeft + halfwidth - unusedLeft - stcPointer;
            $pointer.each(function() {
                $(this).dequeue(); }
            ).animate({
                backgroundPosition: bgPos+'px 0px'
            }, o.speed, o.fx);
        };

    });
};
})(jQuery);