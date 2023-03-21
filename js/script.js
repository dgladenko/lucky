/*---------------------------- start Hamburger_menu_mobile ------------------------*/

$(".ease_select_item_visible").click(function(){
	 $(this).next(".ease_select_item_hidden").toggle( "slow" );
})
$(".header_menu").click(function(){
	$(this).toggleClass('open');
	 $(".js_open_menu").toggle( "slow" );
})

/*---------------------------- finish Hamburger_menu_mobile ------------------------*/

/*---------------------------- start Slick_slider ------------------------*/

  $('.slider_fire_pack').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  infinite: true,
	  autoplaySpeed: 6000,
	  arrows: true,
	  prevArrow: $('.leftsec'),
	  nextArrow: $('.rightsec'),
	  responsive: [
	    {
	      breakpoint: 1350,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    
	    {
	      breakpoint: 890,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});
    $('.slider_easy').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  swipe: false,
	  infinite: true,
	  autoplaySpeed: 10000,
	  arrows: true,
	  prevArrow: $('.lefteasy'),
	  nextArrow: $('.righteasy'),
	  responsive: [
	    {
	      breakpoint: 1350,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    
	    {
	      breakpoint: 890,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});
  $('.reviews_slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  infinite: true,
	  autoplaySpeed: 5000,
	  arrows: true,
	  prevArrow: $('.left_rev'),
	  nextArrow: $('.right_rev'),
	  asNavFor: '.slider_navig',
	  focusOnSelect:true,
	});
  $('.slider_navig').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  infinite: true,
	  autoplaySpeed: 5000,
	  arrows: true,
	  focusOnSelect:true,
	  prevArrow: $('.left_rev'),
	  nextArrow: $('.right_rev'),
	  asNavFor: '.reviews_slider',
	});

/*---------------------------- finish Slick_slider ------------------------*/

/*---------------------------- start Scroll_To ------------------------*/

$(".topnav").click(function (){
		$('html, body').animate({
				scrollTop: $(".header").offset().top
		}, 900);
})
$(".detnav").click(function (){
		$('html, body').animate({
				scrollTop: $(".sec_bl").offset().top
		}, 900);
})
$(".chosenav").click(function (){
		$('html, body').animate({
				scrollTop: $(".why_ch").offset().top
		}, 1200);
})
$(".aboutnav").click(function (){
		$('html, body').animate({
				scrollTop: $(".about_bl").offset().top
		}, 1600);
})
$(".refernav").click(function (){
		$('html, body').animate({
				scrollTop: $(".reviews").offset().top
		}, 2000);
})
$(".contnav").click(function (){
		$('html, body').animate({
				scrollTop: $(".footer").offset().top
		}, 2000);
})


/*---------------------------- finish Scroll_To ------------------------*/

/*---------------------------- start Animate WOW ------------------------*/

new WOW().init();

/*---------------------------- finish Animate WOW ------------------------*/
/*---------------------------- index range code  ------------------------*/
$.fn.WBslider = function() {
	return this.each(function() {
		var $_this = $(this),
			$_date = $('input', $_this),
			$_title = $('.setyear', $_this),
			thumbwidth = 50, // set this to the pixel width of the thumb
			yrnow = 200;

		// set range max to current year
		// $_date.attr('max', yrnow);
		// $('.endyear', $_this).text( yrnow );
		// $_date.val(yrnow - 10); // -10 years, just because...

		$_date.on('input change keyup', function() {
			var $_this = $(this),
				val = parseInt($_date.val(), 10);

			// if (val < 1) {
			// 	val = '< 1987';
			// }
			if (val === '') { // Stop IE8 displaying NaN
				val = 0;
			}

			$_title.text( val );

			var pos = (val - $_date.attr('min'))/($_date.attr('max') - $_date.attr('min'));

			// position the title with the thumb
			var thumbCorrect = thumbwidth * (pos - 0.5) * -1,
				titlepos = Math.round( ( pos * $_date.width() ) - thumbwidth/4 + thumbCorrect );

			$_title.css({'left': titlepos});

			// show "progress" on the track
			pos = Math.round( pos * 99 ); // to hide stuff behide the thumb
			var grad = 'linear-gradient(90deg, #8facf5 ' + pos + '%,#dde6fc ' + (pos+1) + '%)';
			$_date.css({'background': grad});

		}).on('focus', function() {
			if ( isNaN( $(this).val() ) ) {
				$(this).val(0);
			}
		}).trigger('change');
		
		$(window).on('resize', function() {
			$_date.trigger('change');
		});
	});
};

$(function() {

	$('.slider').WBslider();

});

$("#timer1").prop("checked", true);
$("#timer122").prop("checked", true);
$("#timer11").prop("checked", true);
$("#timer4").prop("checked", true);
$("#trigger_l").prop("checked", true);
