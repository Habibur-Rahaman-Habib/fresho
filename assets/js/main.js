/* ==============
 ========= js Documentation ==========================

*Theme Name: Fresho - Organic Food Store HTML  Template
*Author: SparkRaxx
*Author URI: https://themeforest.net/user/sparkraxx/portfolio
*Description: Fresho - Fresho is a special HTML template  designed for online groceries, organic bio products and grocery shopping and includes all the features for the quick shopping and checkout.

		==================================================

		 01. Added Smooth Scroll 
		 -------------------------------------------------
		 02. Preloader
		 -------------------------------------------------
		 03. Scroll To Top With Progress
		 -------------------------------------------------
		 04. Nice Select
		 -------------------------------------------------
		 05. Custom Menu
		 -------------------------------------------------
		 06. Video Popup
		 -------------------------------------------------
		 07. Odemoter
		 -------------------------------------------------
		 08. Wow Animation
		 -------------------------------------------------
		 09. Swipper Slider
		 -------------------------------------------------
		 10. on resize effects
		 -------------------------------------------------
		 11. footer copyright year
		 -------------------------------------------------
		 12. odometer counter
		 -------------------------------------------------
		 13. video popup
		 -------------------------------------------------
		 14. Date Time End
		 -------------------------------------------------
		 15. Isotop Filter
		 -------------------------------------------------
		 16. Quantity Count
		 -------------------------------------------------
		 17. Profile Images Change
		 -------------------------------------------------
		 18. Custom Range Slider
		 -------------------------------------------------
		 19. Magnify Img Zoom
		 -------------------------------------------------
		 20. Product slider
		 -------------------------------------------------
		 21. Recently slider
		 -------------------------------------------------
		 22. Landed Slider
		 -------------------------------------------------
		 23. Customer Slider
		 -------------------------------------------------
		 24. Product Details Slider
		 -------------------------------------------------
		 25. Title Animation
		 -------------------------------------------------
		 26. Footer Styele Three

		==================================================
============== */

"user strict";

$(document).ready(function () {
	//--Nice Select--
	$('select').niceSelect();
	//--Nice Select--

	//menu top fixed bar
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 220) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	//menu top fixed bar

	//--Header Menu
	$(".sbar, .sbar2").on("click", function (e) {
		$(".cart__sidebar, .sbar").toggleClass("active");
	});

	// $(".shoplist__bar").on("click", function (e) {
	// 	$(".shoplist__custom").toggleClass("active");
	// });

	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});

	$(".main-menu li a").on("click", function (e) {
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(300);
		} else {
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.addClass("open");
			element.find("ul").slideDown(300);
			element.siblings("li").find("ul").slideUp(300);
			element.siblings("li").find("ul").slideUp(300);
		}
	});
	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});
	//--Header Menu--

	//--Magnifiqpopup--
	$('.video-btn').magnificPopup({
		type: 'iframe',
		callbacks: {

		}
	});
	//--Magnifiqpopup--

	// 10. scroll to top with progress
	var progressPath = document.querySelector(".progress-wrap path");
	var pathLength = progressPath.getTotalLength();
	progressPath.style.transition = progressPath.style.WebkitTransition =
		"none";
	progressPath.style.strokeDasharray = pathLength + " " + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition =
		"stroke-dashoffset 10ms linear";
	var updateProgress = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength) / height;
		progressPath.style.strokeDashoffset = progress;
	};
	updateProgress();
	$(window).scroll(updateProgress);
	var offset = 50;
	var duration = 1000;
	jQuery(window).on("scroll", function () {
		if (jQuery(this).scrollTop() > offset) {
			jQuery(".progress-wrap").addClass("active-progress");
		} else {
			jQuery(".progress-wrap").removeClass("active-progress");
		}
	});
	jQuery(".progress-wrap").on("click", function (event) {
		event.preventDefault();
		jQuery("html, body").animate({ scrollTop: 0 }, duration);
		return false;
	});

	//--Odometer--//
	$(".odometer-item").each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (
					var i = 0;
					i < document.querySelectorAll(".odometer").length;
					i++
				) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
	//--Odometer--//

	// Button Hover JS
	$(function () {
		$('.default-btn')
			.on('mouseenter', function (e) {
				var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
				$(this).find('span').css({ top: relY, left: relX })
			})
			.on('mouseout', function (e) {
				var parentOffset = $(this).offset(),
					relX = e.pageX - parentOffset.left,
					relY = e.pageY - parentOffset.top;
				$(this).find('span').css({ top: relY, left: relX })
			});
	});


	//--Wow Animation--//
	new WOW().init();
	//--Wow Animation--//

	//--Preloader--//
	setTimeout(function () {
		$('.preloader__wrap').fadeToggle();
	}, 1000);
	//--Preloader--//

	//swipper slider//
	var swiper = new Swiper(".catagory_product", {
		loop: true,
		autoplay: {
			enabled: false,
			delay: 2000,
			reverseDirection: true,
		},
		breakpoints: {
			1800: {
				slidesPerView: 8,
				spaceBetween: 3
			},
			1400: {
				slidesPerView: 7,
				spaceBetween: 5
			},
			1050: {
				slidesPerView: 6,
				spaceBetween: 5
			},
			991: {
				slidesPerView: 5,
				spaceBetween: 5
			},
			500: {
				slidesPerView: 2,
				spaceBetween: 5
			},
			0: {
				slidesPerView: 1,
				spaceBetween: 5
			}
		}
	});

	var swiper = new Swiper(".product__featurewrapper", {
		loop: true,
		slidesPerView: 5,
		autoplay: {
			enabled: true,
			delay: 3000,
		},
		navigation: {
			nextEl: ".my-button-next",
			prevEl: ".my-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
		},
		breakpoints: {
			1800: {
				slidesPerView: 5,
				spaceBetween: 30
			},
			1400: {
				slidesPerView: 4,
				spaceBetween: 20
			},
			1050: {
				slidesPerView: 4,
				spaceBetween: 10
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			500: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			0: {
				slidesPerView: 1,
				spaceBetween: 5
			}
		}
	});

	var swiper = new Swiper(".recently__slidered", {
		loop: true,
		breakpoints: {
			1800: {
				slidesPerView: 4,
				spaceBetween: 30
			},
			1400: {
				slidesPerView: 4,
				spaceBetween: 20
			},
			1050: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			500: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			0: {
				slidesPerView: 1,
				spaceBetween: 5
			}
		}
	});

	var swiper = new Swiper(".landed__clinet", {
		loop: true,
		pagination: {
			el: ".swiper-pagination",
		},
		breakpoints: {
			1800: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			1400: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			1050: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			991: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			500: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			0: {
				slidesPerView: 1,
				spaceBetween: 5
			}
		}
	});

	var swiper = new Swiper(".customer__slidwrapper", {
		spaceBetween: 30,
		loop: true,
		dots: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			1800: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			1400: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			1050: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			500: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			0: {
				slidesPerView: 1,
				spaceBetween: 5
			}
		}
	});

	//product slider
	var swiper = new Swiper(".mySwiper", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 3,
		// freeMode: true,
		watchSlidesProgress: true,
		centeredSlides: true,
	});

	var swiper = new Swiper(".mySwiper2", {
		loop: true,
		// slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: swiper,
		},
	});
	//product slider

});

//Date time Set//

function timingCalc(endtime) {
	"use strict";

	var timeTotal = Date.parse(endtime) - Date.now(),
		timeSeconds = Math.floor((timeTotal / 1000) % 60),
		timeMinutes = Math.floor((timeTotal / 1000 / 60) % 60),
		timeHours = Math.floor((timeTotal / (1000 * 60 * 60)) % 24),
		timeDays = Math.floor(timeTotal / (1000 * 60 * 60 * 24));
	return {
		total: timeTotal,
		seconds: timeSeconds,
		minutes: timeMinutes,
		hours: timeHours,
		days: timeDays
	};
}

function animateCounter(selector, targetValue) {
	var $element = $(selector);
	var currentValue = parseInt($element.text(), 10);

	if (currentValue === targetValue) {
		return;
	}

	$element.addClass("counter-animate");
	$element.text(targetValue);

	setTimeout(function () {
		$element.addClass("show");
	}, 10);

	setTimeout(function () {
		$element.removeClass("counter-animate show");
	}, 500);
}

function startCalc(endtime) {
	var timeTotal = timingCalc(endtime);
	animateCounter(".days", timeTotal.days);
	animateCounter(".hours", timeTotal.hours);
	animateCounter(".minutes", timeTotal.minutes);
	animateCounter(".seconds", timeTotal.seconds);

	if (timeTotal.total <= 0) {
		clearInterval(timingNow);
	}
}
var DeadLine = new Date(Date.parse("25 Dec 2023 00:00:00 GMT"));
setInterval(function () {
	startCalc(DeadLine);
}, 1000);
//Date time Set//

// Isotop Filter//
var $grid = $('.grid').isotope({
	itemSelector: '.color-shape'
});
var filters = {};
$('.filters').on('click', '.button', function (event) {
	var $button = $(event.currentTarget);
	// get group key
	var $buttonGroup = $button.parents('.button-group');
	var filterGroup = $buttonGroup.attr('data-filter-group');
	// set filter for group
	filters[filterGroup] = $button.attr('data-filter');
	// combine filters
	var filterValue = concatValues(filters);
	// set filter for Isotope
	$grid.isotope({ filter: filterValue });
});
$('.button-group').each(function (i, buttonGroup) {
	var $buttonGroup = $(buttonGroup);
	$buttonGroup.on('click', 'button', function (event) {
		$buttonGroup.find('.is-checked').removeClass('is-checked');
		var $button = $(event.currentTarget);
		$button.addClass('is-checked');
	});
});
function concatValues(obj) {
	var value = '';
	for (var prop in obj) {
		value += obj[prop];
	}
	return value;
}
// Isotop Filte//

//quantity
var input = document.querySelector('#qty');
var btnminus = document.querySelector('.qtyminus');
var btnplus = document.querySelector('.qtyplus');
if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {

	var min = Number(input.getAttribute('min'));
	var max = Number(input.getAttribute('max'));
	var step = Number(input.getAttribute('step'));

	function qtyminus(e) {
		var current = Number(input.value);
		var newval = (current - step);
		if (newval < min) {
			newval = min;
		} else if (newval > max) {
			newval = max;
		}
		input.value = Number(newval);
		e.preventDefault();
	}

	function qtyplus(e) {
		var current = Number(input.value);
		var newval = (current + step);
		if (newval > max) newval = max;
		input.value = Number(newval);
		e.preventDefault();
	}

	btnminus.addEventListener('click', qtyminus);
	btnplus.addEventListener('click', qtyplus);

}
//quantity

//profile image change
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
			$('#imagePreview').hide();
			$('#imagePreview').fadeIn(650);
		}
		reader.readAsDataURL(input.files[0]);
	}
}
$("#imageUpload").change(function () {
	readURL(this);
});
//profile image change

//range slider
function getVals() {
	let parent = this.parentNode;
	let slides = parent.getElementsByTagName("input");
	let slide1 = parseFloat(slides[0].value);
	let slide2 = parseFloat(slides[1].value);
	if (slide1 > slide2) { let tmp = slide2; slide2 = slide1; slide1 = tmp; }

	let displayElement = parent.getElementsByClassName("rangeValues")[0];
	displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
}

window.onload = function () {
	let sliderSections = document.getElementsByClassName("range-slider");
	for (let x = 0; x < sliderSections.length; x++) {
		let sliders = sliderSections[x].getElementsByTagName("input");
		for (let y = 0; y < sliders.length; y++) {
			if (sliders[y].type === "range") {
				sliders[y].oninput = getVals;
				sliders[y].oninput();
			}
		}
	}
}

progressBar: () => {
	const pline = document.querySelectorAll(".progressbar.line");
	const pcircle = document.querySelectorAll(".progressbar.semi-circle");
	pline.forEach(e => {
		var line = new ProgressBar.Line(e, {
			strokeWidth: 6,
			trailWidth: 6,
			duration: 3000,
			easing: 'easeInOut',
			text: {
				style: {
					color: 'inherit',
					position: 'absolute',
					right: '0',
					top: '-30px',
					padding: 0,
					margin: 0,
					transform: null
				},
				autoStyleContainer: false
			},
			step: (state, line) => {
				line.setText(Math.round(line.value() * 100) + ' %');
			}
		});
		var value = e.getAttribute('data-value') / 100;
		new Waypoint({
			element: e,
			handler: function () {
				line.animate(value);
			},
			offset: 'bottom-in-view',
		})
	});
	pcircle.forEach(e => {
		var circle = new ProgressBar.SemiCircle(e, {
			strokeWidth: 6,
			trailWidth: 6,
			duration: 2000,
			easing: 'easeInOut',
			step: (state, circle) => {
				circle.setText(Math.round(circle.value() * 100));
			}
		});
		var value = e.getAttribute('data-value') / 100;
		new Waypoint({
			element: e,
			handler: function () {
				circle.animate(value);
			},
			offset: 'bottom-in-view',
		})
	});
}

const rangeInput = document.querySelectorAll(".range-input input"),
	priceInput = document.querySelectorAll(".price-input input"),
	range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
	input.addEventListener("input", (e) => {
		let minPrice = parseInt(priceInput[0].value),
			maxPrice = parseInt(priceInput[1].value);

		if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
			if (e.target.className === "input-min") {
				rangeInput[0].value = minPrice;
				range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
			} else {
				rangeInput[1].value = maxPrice;
				range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
			}
		}
	});
});

rangeInput.forEach((input) => {
	input.addEventListener("input", (e) => {
		let minVal = parseInt(rangeInput[0].value),
			maxVal = parseInt(rangeInput[1].value);

		if (maxVal - minVal < priceGap) {
			if (e.target.className === "range-min") {
				rangeInput[0].value = maxVal - priceGap;
			} else {
				rangeInput[1].value = minVal + priceGap;
			}
		} else {
			priceInput[0].value = minVal;
			priceInput[1].value = maxVal;
			range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
			range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
		}
	});




});
//range slider 



