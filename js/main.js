(function($) {    
	var els = {};

	function _init() {
		els.header = $('.header');

		_events();
	}

	function _events() {
		$('.js-open-menu').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			els.header.toggleClass('mobile-menu-open');
		});

		$('body').on('click', function() {
			if (els.header.hasClass('mobile-menu-open')) {
				els.header.removeClass('mobile-menu-open'); 
			}
		});

		$('.js-scroll-link').on('click', function(e) {
			e.preventDefault();
            $("html, body").animate({
                scrollTop: $(e.target.hash).offset().top - 20
            }, 500);
		});
	}

	$(document).ready(function() {   
		_init(); 
	});    

})(jQuery);