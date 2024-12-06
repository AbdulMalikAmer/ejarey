(function($) {
	"use strict"

	// Mobile Nav toggle
	$('.menu-toggle > a').on('click', function (e) {
		e.preventDefault();
		$('#responsive-nav').toggleClass('active');
	})

	document.addEventListener("DOMContentLoaded", function () {
		const dropdownButton = document.getElementById("dropdownButton");
		const dropdownMenu = document.getElementById("dropdownMenu");
	
		// عند النقر على الزر
		dropdownButton.addEventListener("click", function (event) {
			event.stopPropagation(); // منع تأثير النقر من الوصول للعناصر الأخرى
			dropdownMenu.classList.toggle("show");
		});
	
		// إخفاء القائمة عند النقر في أي مكان خارجها
		document.addEventListener("click", function () {
			dropdownMenu.classList.remove("show");
		});
	
		// منع إغلاق القائمة عند النقر داخلها
		dropdownMenu.addEventListener("click", function (event) {
			event.stopPropagation();
		});
	});
	
	

	/////////////////////////////////////////

	// Products Slick
	$('.products-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			infinite: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
			responsive: [{
	        breakpoint: 991,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 1,
	        }
	      },
	      {
	        breakpoint: 480,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	        }
	      },
	    ]
		});
	});

	// Products Widget Slick
	$('.products-widget-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			infinite: true,
			autoplay: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
		});
	});

	/////////////////////////////////////////

	// Product Main img Slick
	$('#product-main-img').slick({
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: '#product-imgs',
  });

	// Product imgs Slick
  $('#product-imgs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
		centerPadding: 0,
		vertical: true,
    asNavFor: '#product-main-img',
		responsive: [{
        breakpoint: 991,
        settings: {
					vertical: false,
					arrows: false,
					dots: true,
        }
      },
    ]
  });

	// Product img zoom
	var zoomMainProduct = document.getElementById('product-main-img');
	if (zoomMainProduct) {
		$('#product-main-img .product-preview').zoom();
	}

	/////////////////////////////////////////

	// Input number
	$('.input-number').each(function() {
		var $this = $(this),
		$input = $this.find('input[type="number"]'),
		up = $this.find('.qty-up'),
		down = $this.find('.qty-down');

		down.on('click', function () {
			var value = parseInt($input.val()) - 1;
			value = value < 1 ? 1 : value;
			$input.val(value);
			$input.change();
			updatePriceSlider($this , value)
		})

		up.on('click', function () {
			var value = parseInt($input.val()) + 1;
			$input.val(value);
			$input.change();
			updatePriceSlider($this , value)
		})
	});

	var priceInputMax = document.getElementById('price-max'),
			priceInputMin = document.getElementById('price-min');

	priceInputMax.addEventListener('change', function(){
		updatePriceSlider($(this).parent() , this.value)
	});

	priceInputMin.addEventListener('change', function(){
		updatePriceSlider($(this).parent() , this.value)
	});

	function updatePriceSlider(elem , value) {
		if ( elem.hasClass('price-min') ) {
			console.log('min')
			priceSlider.noUiSlider.set([value, null]);
		} else if ( elem.hasClass('price-max')) {
			console.log('max')
			priceSlider.noUiSlider.set([null, value]);
		}
	}

	// Price Slider
	var priceSlider = document.getElementById('price-slider');
	if (priceSlider) {
		noUiSlider.create(priceSlider, {
			start: [0, 10000],
			connect: true,
			step: 1,
			range: {
				'min': 0,
				'max': 10000
			},
			
			format: {
				to: function (value) {
					return Math.round(value).toString(); // تحويل القيمة إلى عدد صحيح بدون فواصل عشرية
				},
				from: function (value) {
					return Number(value); // تحويل النص إلى رقم
				}
			}

		});

		priceSlider.noUiSlider.on('update', function( values, handle ) {
			var value = values[handle];
			handle ? priceInputMax.value = value : priceInputMin.value = value
		});
	}

	function openAdOptions() {
		const modal = document.getElementById('adOptionsModal');
		modal.style.display = 'flex';
		document.body.style.overflow = 'hidden'; // منع التمرير في الخلفية
	}
	
	function closeAdOptions() {
		const modal = document.getElementById('adOptionsModal');
		modal.style.display = 'none';
		document.body.style.overflow = 'auto'; // إعادة التمرير
	}
	
	
	// استهداف الأزرار والقائمة المنسدلة
document.addEventListener('DOMContentLoaded', () => {
    const detailButtons = document.querySelectorAll('.details-btn');

    detailButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const dropdown = event.target.nextElementSibling;
            
            // إظهار أو إخفاء القائمة
            if (dropdown.style.display === 'none' || dropdown.style.display === '') {
                dropdown.style.display = 'block';
            } else {
                dropdown.style.display = 'none';
            }
        });
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (event) => {
        if (!event.target.classList.contains('details-btn') &&
            !event.target.classList.contains('dropdown-item')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
});



})(jQuery);




