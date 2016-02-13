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

		$('.contact-form input, .contact-form textarea').blur(function() {
			console.log('firing');
			if ($(this).hasClass('invalid') && $(this).val() !== '') {
				$(this).removeClass('invalid');
			}
		});

		$('.js-contact-submit').on('click', function(e) {
			e.preventDefault();
			var form = $('.contact-form');
			form.find('input').removeClass('invalid');

			var formData = {};
			formData.message = form.find('#message').val();
			formData.email = form.find('#email').val();
			formData.name = form.find('#name').val();

			var validData = _validateForm(formData);
			if (validData) {
				$.ajax({
				    url: "//formspree.io/fair.dan@gmail.com", 
				    method: "POST",
				    data: formData,
				    dataType: "json",
				    success: function(data) {
				    	$('.contact-form').slideUp(500);
				    	$('.contact-form__message.success').removeClass('hidden').fadeIn(500);
				    }
				});
			} else {
				return;
			}
		});
	}

	function _validateForm(formData) {
		var returnVal = true;
		for (var field in formData) {
			if (!formData[field]) {
				$('#' + field).addClass('invalid');
				returnVal = false;
			}
		}
		if (!returnVal) {
			$('.js-validation-error').removeClass('hidden');
		}
		return returnVal;
	}

	$(document).ready(function() {   
		_init(); 
	});    

})(jQuery);