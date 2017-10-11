(function($) {
	var els = {};

	function _init() {
		els.header = $('.header');
		els.win = $(window);
		els.htmlBody = $('html, body');

		var waypoints = $('.content-section').waypoint({
			handler: function(direction) {
				$('.header__nav ul li a').removeClass('active');
				var associatedMenuLink = $('.header__nav ul li a[href="#' + this.element.id + '"]');
				if (direction === 'down') {
					associatedMenuLink.addClass('active');
				} else {
					associatedMenuLink.closest('li').prev().find('a').addClass('active');
				}
			}
		})
		
		_events();
	}

	function _events() {

		var resizeTimer;
		els.win.on('resize', function(e) {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout( function() {
				_closeHeader(els.header.hasClass('mobile-menu-open'));
			}, 250);
		});

		els.win.on('scroll', function() {
			_closeHeader(els.header.hasClass('mobile-menu-open'));
		});

		els.htmlBody.on('click', function() {
			_closeHeader(els.header.hasClass('mobile-menu-open'));
		});

		$('.js-open-menu').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			els.header.toggleClass('mobile-menu-open');
		});

		$('.js-scroll-link').on('click', function(e) {
			e.preventDefault();
			var hashEl = $(e.target.hash);
			var headerOffset = e.target.hash === '#hero' ? 70 : 20;

            els.htmlBody.animate({
                scrollTop: hashEl.offset().top - headerOffset
            }, 500);
		});

		$('.contact-form input, .contact-form textarea').blur(function() {
			if ($(this).hasClass('invalid') && $(this).val() !== '') {
				$(this).removeClass('invalid');
			}
		});

		$('.js-contact-submit').on('click', function(e) {
			e.preventDefault();
			_handleForm();
		});

		$('.js-launch-slideshow').on('click', function(e) {
			e.preventDefault();
			_handleSlideshow($(this));
		});

		$('.js-show-client-work, .js-show-personal-work').on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			console.log('this', $this);
			if ($this.hasClass('js-show-client-work')) {
				console.log('1');
				$('.js-show-client-work').addClass('disabled');
				$('.js-show-personal-work').removeClass('disabled');
				$('.js-work-section').removeClass('personal-work-open').addClass('client-work-open');
			} else {
				console.log('2');
				$('.js-show-personal-work').addClass('disabled');
				$('.js-show-client-work').removeClass('disabled');
				$('.js-work-section').removeClass('client-work-open').addClass('personal-work-open');
			}
		})
	}

	function _closeHeader(isOpen) {
		if (isOpen) {
			els.header.removeClass('mobile-menu-open');
		}
	}

	function _handleForm() {
		var form = $('.contact-form');
		form.find('input').removeClass('invalid');

		var formData = {};
		formData.message = form.find('#message').val();
		formData.email = form.find('#email').val();
		formData.name = form.find('#name').val();

		var validData = _validateForm(formData);
		if (validData) {
			_submitForm(formData);
		} else {
			return;
		}
	}

	function _submitForm(formData) {
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
	}

	function _validateForm(formData) {
		var returnVal = true;
		console.log(formData);
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
