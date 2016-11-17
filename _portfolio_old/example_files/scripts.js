//Set jQuery into no conflict mode
var $jq = jQuery.noConflict();

$jq().ready(function() {
	// Sets the Kwiucks Accordion in motion
	$jq('.kwicks').kwicks({	max : 630, spacing : 10, duration:1000, easing: 'easeOutCubic'});
});
		
$jq(function(){
	// This is the CUFON FONT target. All elements are targeted individually for complete control.
   Cufon.replace('h1, .accordion-textbox h2, span.accordion-title, .business-box h2,  span.title , #tagline a, .homepage-box h2, .footer-widgets h4, li.sliderImage span strong, .magazine-frontpage-toolbox h3, #left-content h2, #fullwidth-content h2, #left-content h3, #fullwidth-content h3, li.widget h2.widgettitle, #modal-info-wrapper h2, #modal-info-wrapper h3, .portfolio-header  h2, a.portfolio-visit-anchor', {hover: true});
});

$jq(document).ready(function() {	

	// Main navigation animation 
	$jq("ul#menu li").hover(function(){
	
			$jq(this).children("div").stop().fadeTo(900, .9);
			$jq(this).find("span.subtitle").stop().fadeTo(900, 1);},
			
		function(){
			
			$jq(this).children("div").stop().fadeTo(900, 0);
			$jq(this).find("span.subtitle").stop().fadeTo(900, .7);
			
	});	
	
	$jq("ul#menu li").children("div").addClass("show");
	
	$jq("ul#menu li").children("div").css("opacity", 0);
	
	// Latest Work Image Rollover 
	$jq("img.mini-portfolio").fadeTo(100, 0.7);
	
	$jq("img.mini-portfolio").hover(function(){
	
			$jq(this).stop().fadeTo(100, 1);},
			
		function(){
			
			$jq(this).stop().fadeTo(900, 0.7);
					
	});		

		
	//hover effect for the kwicks accordion	
	$jq('.kwicks li div.accordion-overlay').hover(		
		function(){			
			$jq(this).children('div.accordion-textbox').stop().animate({top: '200px'}, 600, 'easeOutCubic');},			
		function(){			
			$jq(this).children('div.accordion-textbox').stop().animate({top: '300px'}, 1000, 'easeOutCubic');
	});		
	
	$jq('a.accordion-anchor').hover(	 	
		function(){			
			$jq(this).parent().children('div.accordion-overlay').children('div.accordion-textbox').stop().animate({top: '200px'}, 600, 'easeOutCubic');},			
		function(){			
			$jq(this).parent().children('div.accordion-overlay').children('div.accordion-textbox').stop().animate({top: '300px'}, 1000, 'easeOutCubic');
	});		
	
	
	$jq('.kwicks li div.accordion-overlay').hover(		
		function(){			
			$jq(this).children('span.modern-position').stop(true,true).animate({left: '-170px'}, 600);
			$jq(this).children('span.ie-position').stop(true,true).animate({left: '-34px'}, 300);
		},			
		function(){			
			$jq(this).children('span.modern-position').stop(true,true).animate({left: '-134px'}, 600);
			$jq(this).children('span.ie-position').stop(true,true).animate({left: '0px'}, 300);
	});	
	
	$jq('a.accordion-anchor ').hover(		
		function(){			
			$jq(this).parent().children('div.accordion-overlay').children('span.modern-position').stop(true,true).animate({left: '-170px'}, 600);
			$jq(this).parent().children('div.accordion-overlay').children('span.ie-position').stop(true,true).animate({left: '-34px'}, 300);
		},			
		function(){			
			$jq(this).parent().children('div.accordion-overlay').children('span.modern-position').stop(true,true).animate({left: '-134px'}, 600);
			$jq(this).parent().children('div.accordion-overlay').children('span.ie-position').stop(true,true).animate({left: '0px'}, 300);
	});	
	
	// Browser Specific Code to make Accordion degrade geacefully 
	if (jQuery.browser.msie) { 
		if(parseInt(jQuery.browser.version) == 8) { 
			$jq('span.accordion-title').removeClass('modern-position').addClass('ie-position'); 
		} 
	} 
	if (jQuery.browser.msie) { 
		if(parseInt(jQuery.browser.version) == 7) { 
			$jq('span.accordion-title').removeClass('modern-position').addClass('ie-position'); 
		} 
	} 	
			
	if($jq.browser.safari && parseInt($jq.browser.version.substr(0,3))<528){
	   $jq('span.accordion-title').hide(300);
	}
	
	if($jq.browser.opera) {
	   $jq('span.accordion-title').hide(300);
	}
			
	if($jq.browser.mozilla && $jq.browser.version <= "1.9") {
	   $jq('span.accordion-title').hide(300);
	}
		
		
	// hover effect for the navigation dropdown
	$jq('ul#menu li').hover(	
		function(){					
			$jq(this).children('ul').stop(true,true).slideDown(300);},		
		function(){	
			
			$jq(this).children('ul').animate({opacity: '+=0'}, 100).slideUp(300); 		
	}); 		
 
	// Hover effect for the RSS Link
	$jq('a#navigation-rss').children('span').css('opacity', 0);
	$jq('a#navigation-rss').children('span').css('display', 'block');
	$jq('a#navigation-rss').hover(
		function(){
			$jq(this).children('span').stop().fadeTo(900, 1);},
		function(){
			$jq(this).children('span').stop().fadeTo(900, 0);;
	});			
 
	// Hover effect for the default Magazine post 
	$jq('a.magazine-anchor-default').hover(	    		
			function(){				
				$jq(this).children('img').stop().animate({opacity: .5}, 600);
				},				
			function(){								
				$jq(this).children('img').stop().animate({opacity: 1}, 600);
	});
	
	// Hover effect for the Video Magazine post
	$jq('a.video-overlay-anchor').hover(			
			function(){				
				$jq(this).parent('div').parent('div').children('div').children('img').stop().animate({opacity: .6}, 600);},				
			function(){
				$jq(this).parent('div').parent('div').children('div').children('img').stop().animate({opacity: 1}, 600);	
	});	
	

	
	// Hover effect for the image Magazine post 
	$jq('a.image-overlay-anchor').hover(	    		
			function(){				
				$jq(this).children('img').stop().animate({opacity: .5}, 600);
				$jq(this).parent('div').children('h2').stop().animate({bottom: '0px'}, 300);},				
			function(){					
				$jq(this).children('img').stop().animate({opacity: 1}, 600);				
				$jq(this).parent('div').children('h2').stop().animate({bottom: '-20px'}, 300);
	});		
	
	// Hover effect for the Homepage widgets
	$jq('.bb-image img, .bb-video img').hover(
			function(){
				$jq(this).stop().animate({opacity:0.4}, 1000);
				
				},
			function(){
				$jq(this).stop().animate({opacity:1}, 1000);
	});
	
	
		
	// Magazine Toolbox (Mini-sidebar) click Events - 				
	$jq('div.toolbox-animate h3').toggle(			
		function(){
			$jq('div.toolbox-margin').hide(500);	
			$jq('div.toolbox-animate').addClass('hide-me');       														// (1) - add class .hide-me to all child divs 
			$jq(this).parent().removeClass('hide-me');     																// (2) - remove class .hide-me on *this* div 
			$jq(this).parent().children('div.jScrollPaneContainer, div.toolbox-search-wrapper').show(300); 				// (3) - expand *this* div's ul list scrollbar styled container 
			$jq(this).parent().children('div.toolbox-bottom-corners, div.toolbox-bottom-corners2').show(300); 			// (4) - expand *this* div's bottom corners
			$jq(this).parent('div').css( {backgroundPosition: "165px -148px"} ); 										// (5) - animate background position
			$jq('div.hide-me').hide(500);},  																			// (6) - hide all .hide-me divs			
		function(){																										// (7) - callback >> hide internal ul and unhide other divs	
		$jq('div.toolbox-margin').show(500);
		$jq('div.hide-me').show(500);
		$jq(this).parent().children('div').hide(300);
		$jq(this).parent('div').css( {backgroundPosition: "165px 2px"} ); 	
	});
	
	// Controls the scroll bar in the magazine homepage (inside the toolbox)
	$jq(function(){
			$jq('.scroll-pane').jScrollPane({
				scrollbarWidth: 20
			});
		});
	
	// Onload Fades in the Magazine Toolbox
	$jq('div.magazine-frontpage-toolbox').animate({opacity: '+=0'}, 600).fadeTo(1000, 1)
	
	//Onload Fades out the Spans in the Portfolio Page 	
	$jq('a.portfolio-modal-anchor, a.portfolio-video-modal-anchor').children('span').animate({opacity: 1}, 100);
		
	// Hover effect for the Portfolio Galleria Items
	$jq('a.portfolio-modal-anchor, a.portfolio-video-modal-anchor, a.portfolio-colourbox-image').hover(	    		
			function(){				
				$jq(this).children('img').stop().animate({opacity: .4}, 600);
				$jq(this).children('span').stop().animate({opacity: 1, bottom: '0px'}, 300);},				
			function(){					
				$jq(this).children('img').stop().animate({opacity: 1}, 600);
				$jq(this).children('span').stop().animate({opacity: 0, bottom: '-20px'}, 600);				
	});
	
	// Dynamically adds ID of "embedded-video" to relevant div containing hidden video object	
	$jq('div.portfolio-wrapper-video').hover(	    		
			function(){			
				$jq('div.video-target').removeClass('embedded-video');  
				$jq(this).children('div').children('div.video-target').addClass('embedded-video');},				
			function(){					
				$jq(this).children('div').children('div.video-target').removeClass('embedded-video');
	});	
	
	$jq('div.business-box').hover(	    		
			function(){			
				$jq('div.video-target').removeClass('embedded-video');  
				$jq(this).children('div').children('div.video-target').addClass('embedded-video');},				
			function(){					
				$jq(this).children('div').children('div.video-target').removeClass('embedded-video');
	});			
	
});

$jq(document).ready(function(){	
	
	//The Colourbox Modal Window is initiated here 	
	$jq(".colourbox-image").colorbox();
	$jq(".portfolio-colourbox-image").colorbox();
	$jq(".portfolio-modal-anchor").colorbox({iframe:true, innerWidth:950, innerHeight:560});
	$jq(".homepage-modal-anchor").colorbox({iframe:true, innerWidth:950, innerHeight:560});
	$jq(".portfolio-video-modal-anchor").colorbox({iframe:true, innerWidth:890, innerHeight:500});
	$jq(".homepage-video").colorbox({iframe:true, innerWidth:890, innerHeight:500}); 
	$jq(".video-overlay-anchor").colorbox({iframe:true, innerWidth:890, innerHeight:500}); 
	$jq(".magazine-video-colorbox").colorbox({iframe:true, innerWidth:890, innerHeight:500}); 
 
	//The S3 Slider is initiated here	 
	$jq('#slider').s3Slider({ timeOut: 8000 });

});

