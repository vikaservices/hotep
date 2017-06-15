var credits_scrolling = false;

function validateForm() {
	var email = document.forms['contactForm']['replyto'].value;
	var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	if( re.test(email) ) {
		return true;
	} else {
		alert("You need to give a valid email address");
		return false;
	}
}


$( document ).ready(function() {

function checkStartCreditScrolling() {
	var e = $('.credits-player');
	var d = $(window).scrollTop();
	var w = $(window).height();

	//console.log("scroll: " + (d + (w-w/4)) + " : " + e.offset().top );

	if( !credits_scrolling && ((d + (w-w/4)) > e.offset().top) ) {
		// start credits player when it's scrolled 1/4 of the window height
		startCreditsPlayer();
		credits_scrolling = true;
	}
}


$(document).on('scroll', function(){
	checkStartCreditScrolling();
})

function startCreditsPlayer() {
	//console.log("start anim");
	$('.credits-player ul').addClass('credits-player-animate')
}

function slowVid() {

	$("#hotep video").get(0).playbackRate = 0.4;

}

function nav(){

	$('.nav-toggle').click(function(){

		$('.nav').toggleClass('open');

	});

}

function smoothScroll(){

	$('a[href^="#"]').click(function(event){

		var target = $($(this).attr('href'));

    if (target.length){
      event.preventDefault();
      $('html, body').animate({
	      scrollTop: target.offset().top - 15
      }, 300);
    }

		$('.nav').toggleClass('open');

	});

}

function fullSlider(){

	$('#full-slide .prev, #full-slide .next').click(function(){

		var $this = $(this),
				current = $('.banner').find('.active'),
				position = $('.banner').children().index(current),
				totalPics = $('.banner').children().length;

		if ($this.hasClass('next')){

			if (position < totalPics - 1){
				$('.active').removeClass('active').next().addClass('active');
			}

			else {
				$('.banner li').removeClass('active').first().addClass('active');
			}

		}

		else {

			if (position === 0){
				$('.banner li').removeClass('active').last().addClass('active');
			}

			else {
				$('.active').removeClass('active').prev().addClass('active');
			}

		}

	});

}

function threeSlider(){

	$('#three-slide .prev, #three-slide .next').click(function(){

		var $this = $(this),
				curBack = $('.slider').find('.back'),
				posBack = $('.slider').children().index(curBack),
				curCurr = $('.slider').find('.current'),
				posCurr = $('.slider').children().index(curCurr),
				curFront = $('.slider').find('.front'),
				posFront = $('.slider').children().index(curFront),
				totalPics = $('.slider').children().length;

		$('.slider').addClass('swap');

		setTimeout(function(){

			if ($this.hasClass('next')){

				if (posFront < totalPics - 1 && posCurr < totalPics - 1 && posBack < totalPics - 1){
					$('.back').removeClass('back').next().addClass('back');
					$('.current').removeClass('current').next().addClass('current');
					$('.front').removeClass('front').next().addClass('front');
				}

				else {

					if (posFront === totalPics - 1){
						$('.back').removeClass('back').next().addClass('back');
						$('.current').removeClass('current').next().addClass('current');
						$('.slider li').removeClass('front').first().addClass('front');
					}

					else if (posCurr === totalPics - 1){
						$('.back').removeClass('back').next().addClass('back');
						$('.slider li').removeClass('current').first().addClass('current');
						$('.front').removeClass('front').next().addClass('front');
					}

					else {
						$('.slider li').removeClass('back').first().addClass('back');
						$('.current').removeClass('current').next().addClass('current');
						$('.front').removeClass('front').next().addClass('front');
					}

				}

			}

			else {

				if (posBack !== 0 && posCurr !== 0 && posFront !== 0){
					$('.back').removeClass('back').prev().addClass('back');
					$('.current').removeClass('current').prev().addClass('current');
					$('.front').removeClass('front').prev().addClass('front');
				}

				else {

					if (posBack === 0){
						$('.slider li').removeClass('back').last().addClass('back');
						$('.current').removeClass('current').prev().addClass('current');
						$('.front').removeClass('front').prev().addClass('front');
					}

					else if (posCurr === 0){
						$('.back').removeClass('back').prev().addClass('back');
						$('.slider li').removeClass('current').last().addClass('current');
						$('.front').removeClass('front').prev().addClass('front');
					}

					else {
						$('.back').removeClass('back').prev().addClass('back');
						$('.current').removeClass('current').prev().addClass('current');
						$('.slider li').removeClass('front').last().addClass('front');
					}

				}

			}

			$('.slider').removeClass('swap');

		}, 300);

	});

}

nav();

smoothScroll();

fullSlider();

threeSlider();

slowVid();

checkStartCreditScrolling();

});
