$(function() {
	/* navigation */
	function navigation() {
		nav_btn.toggleClass('header-btn-active');
		nav.toggleClass('header-nav-active');
	}
	var nav_btn = $('.header-nav__btn');
	var nav = $('.header-overlay-nav');
	var nav_items = $('.header-nav a');
	nav_items.click(navigation);
	nav_btn.click(navigation);

	/* services tabs */
	var tab_btns = $('.tabs-links__item a');
	var tab_content = $('.tabs-content');
	$(tab_btns).on('click', function(e) {
		e.preventDefault();
		var link = $(this).attr('href');
		tab_content.each(function() {
			var curr_link = '#' + $(this).attr('id');
			if (curr_link == link) {
				$(this).addClass('active');
			}
			else {
				$(this).removeClass('active');
			}
		});
	});

	/* clients slider */
	$('.clients-slider-slick').slick({
	  infinite: true,
	  arrows: true,
	  prevArrow: '.clients-slider .prev-btn',
	  nextArrow: '.clients-slider .next-btn',
	  dots: true,
	  customPaging: function(slider, i) {
	  	var thumb = $(slider.$slides[i]).data();
	  	return '<button class="slider-dot"></button>';
	    },
	  dotsClass: 'clients-slider-dots',
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	/* team blocks animation */
	var team_block = $('#team .team-blocks__item');
	team_block.hover(function(e) {
		$(this).find('.bg-image').stop().animate({opacity: 0}, 200).css({display: 'none'});
		$(this).find('.block-content').stop().animate({opacity: 1}, 200);
		$(this).find('.block-title').stop().animate({opacity: 0}, 200).css({display: 'none'});
	}, function() {
		$(this).find('.bg-image').stop().animate({opacity: 1}, 400).css({display: 'block'});
		$(this).find('.block-content').stop().animate({opacity: 0}, 200);
		$(this).find('.block-title').stop().animate({opacity: 1}, 200).css({display: 'block'});
	});

	/* footer carousel */
	$('.links-carousel-slick').slick({
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 1000,
	  arrows: false,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 478,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	/* contact form popup */
	var contact_form = $('#contact-btn');
	var contact_form_close = $('.close');
	contact_form.on('click', function() {
		$('.contact-modal').css({display: 'block'});
	});
	contact_form_close.on('click', function() {
		$('.contact-modal').css({display: 'none'});
	});

	/* contact form ajax */
	$('.header-form').submit(function(e) {
		e.preventDefault(); 
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function() {
          console.log('success');
        }).fail(function() {
          console.log('fail');
        });
      });
});