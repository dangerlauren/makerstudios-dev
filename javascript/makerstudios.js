(function($) {

	$(function(){
		$('.custom-makerstudioslogo, .custom-cselogo, .custom-utlogo').click(function(){
			window.location=$(this).find("a").attr("href");
			return false;
		});
	});

	$(function() {
		$(".moduletable-mainnav > .menu > li.deeper, #left > .menu-subnav > li.deeper").mouseenter(function(){
			var navclass = $(this).attr("class");
		  $(this).addClass("showme");
		}).mouseleave(function(){
			var navclass = $(this).attr("class");
		  $(this).removeClass("showme");
		});
	});

	$(function(){
		$( '.menuhead h3' ).click(function(){
			$('#left .menu-subnav').slideToggle();
		});		
	});

	// $(function(){
	// 	$('.moduletable-mobilenav').click(function(){
	// 		$('#submast .menu-mobile').slideToggle().toggleClass('expand');
	// 	})
	// });

	$(function(){
		$( '.moduletable-mobilenav h3' ).click(function(){
			$('.moduletable-mobilenav h3').css({'z-index': '999'});
			var docHeight = $(document).height();
			$("body").append("<div id='overlay'></div>");
			$('.menu-mobile').slideToggle();
			$("#overlay").height(docHeight); 
		   	$('#overlay').toggleClass('show');
		});		
	});

	$(function(){
		$(window).on('resize', function() {
			if ($(window).width() > 1000) {
				$("#overlay").remove(".show");
				$(".menu-mobile").hide();
			}
		});
	});

	$(function(){
		$( '.moduletable-flexcontrols p a.next, .moduletable-flexcontrols p a.prev' ).click(function(event){
			var n = $(this).attr('href').substring(1);
			if (n == 'null') {
				return false;
			} else {
				$('.'+ n).css({'display':'block'});
				$('.moduletable-flex:not(.'+ n +')').css({'display':'none'});
				switch (n) {
					case "one" :
						$('.moduletable-flexcontrols p a.next').attr('href', '#two');
						$('.moduletable-flexcontrols p a.prev').attr('href','#null').addClass('disabled');
						break;
					case "two" :
						$('.moduletable-flexcontrols p a.next').attr('href', '#three').removeClass('disabled');
						$('.moduletable-flexcontrols p a.prev').attr('href','#one').removeClass('disabled');
						break;
					case "three" :
						$('.moduletable-flexcontrols p a.next').attr('href','#null').addClass('disabled');
						$('.moduletable-flexcontrols p a.prev').attr('href','#two');
						break;
					}
			}
		});		
	});

	$(function() {

		$(".switch a").click(function(e) { 

			var link = $(this).attr("href");
			
			$(link).slideToggle();
			$(this).toggleClass('active');
			
			e.preventDefault(); 

		});
	});

	$(function() {
		// Find all videos
		var $allVideos = $("iframe"),

    	// The element that is fluid width
    	$fluidEl = $(".custom-video .custom-video,  .halfvideo .halfvideo, div.blog, div.blog-news");

		// Figure out and save aspect ratio for each video
		$allVideos.each(function() {
  			$(this)
    		.data('aspectRatio', this.height / this.width)

    		// and remove the hard coded width/height
    		.removeAttr('height')
    		.removeAttr('width');
		});

		// When the window is resized
		$(window).resize(function() {
  			var newWidth = $fluidEl.width();

  		// Resize all videos according to their own aspect ratio
	  		$allVideos.each(function() {
	    		var $el = $(this);
	    		$el
	      			.width(newWidth)
	      			.height(newWidth * $el.data('aspectRatio'));
			});

		// Kick off one resize to fix all videos on page load
		}).resize();
	});

})(jQuery);