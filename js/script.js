// Slide menu Part Start
function openfunction(){
    document.querySelector("#menu").style.width="50%";
}
function closefunction(){
    document.querySelector("#menu").style.width="0%";
}
// Slide menu Part End




// jQuarry Part Strat
$(function(){
    // Typed Js Start
    $(".typed").typed({
		strings: ["Dream.", "Life."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 40,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 100,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
	// Typed Js End
	
	// Gallery Venobox Part Start
	$('.venobox').venobox(); 
	// Gallery Venobox Part Start

	// choaches slik slider Part Start
	$('.coaches-item-slick-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		centerMode: true,
		centerPadding: '60px',
		prevArrow: ('<i class="fad fa-angle-left coaches-pre-arrow"></i>'),
		nextArrow: ('<i class="fad fa-angle-right coaches-next-arrow"></i>'),
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
	  });
	  // choaches slik slider Part End

	  // testimonial Slider part Start
	  $('.testimonial-slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: ('<i class="fad fa-angle-left testimonial-pre"></i>'),
		nextArrow: ('<i class="fad fa-angle-right testimonial-next"></i>'),
  
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
	  });
	// testimonial Slider Part End

});
// jQuarry Part End