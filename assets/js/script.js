(function ($){
	'use strict';

	// var headerOffset = $(".header-inner").offset().top;
	// $(window).scroll(function(){
	// 	if($(window).width() > 991){
	// 		var scroll = $(window).scrollTop();
	// 		if (scroll >= headerOffset) {
	// 			$(".header-inner").addClass('fixed-top');
	// 		}
	// 		else{
	// 			$(".header-inner").removeClass('fixed-top');
	// 		}
	// 	}
	// });

	/*============== Smooth Scroll ==============*/
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 100
            },
            300
          );
        }
      }
    });
  /*------------------------*/


	var $grid = $('.portfolios').isotope({
	  itemSelector: '.portfolio-item',
	  layoutMode: 'fitRows'
	});

	// bind filter button click
	$('.filters-button-group').on( 'click', 'div', function() {
	  var filterValue = $( this ).attr('data-filter');
	  // use filterFn if matches value
	  filterValue =  filterValue;
	  $grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'div', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});

	$('.portfolio-item img').matchHeight({
		byRow: true,
	    property: 'height',
	    target: null,
	    remove: false
	});

}(jQuery));