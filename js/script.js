// alert('yes');

$(document).ready(function(){
	var is_mobile = window.matchMedia("only screen and (max-width: 767px)").matches;
	$(document).scroll(function() {
		revealFade();
		revealGrow();
		let value = $(this).scrollTop();
		$('.hightlight .name').css('left', (value * 1) + 'px');
		$('.hightlight .layer-3').css({
			// 'height' : (value == 0 ? '100' : '120') + "%",
			'transform' : "scale(" + toBigger(value) + ")"
		});
		
		$('.vl-1').css('height', (value * 0.4) + 'px'); 
		$('.vl-2').css('height', ((value - 3500) * 0.4) + 'px'); 
		
		var distance = $('.c-2 .layer-2').offset().top - $(window).scrollTop();
		
		if(distance > 0){
			var d1 = (distance / 1) * 0.3;
			$('.c-2 .layer-2').css('top', distance / 15 + 'px');
			if (is_mobile) {
				$('.c-2 .description').css('margin-left', (distance < 100 ? 0 : d1) + 'px');
			} else {
				$('.c-2 .description').css('margin-left', (distance < 100 ? 30 : d1) + 'px');
			}
		}
		console.log(value);
		if(value > 2800 & value < 4000) {
			$('.sd-1 .title').css("opacity", "1");
		} else {
			$('.sd-1 .title').css("opacity", "0");
		}

		if(value > 4400 & value < 5500) {
			$('.sd-2 .title').css("opacity", "1");
		} else {
			$('.sd-2 .title').css("opacity", "0");
		}
	});

	$('#carousel3dWork').hide();
	$('#carouselDesignsWork').hide();

	$(document).on('click', '#work-1', function(){
		$('#carouselKabesinaWork').show();
		$('#carousel3dWork').hide();
		$('#carouselDesignsWork').hide();
	});

	$(document).on('click', '#work-2', function(){
		$('#carouselDesignsWork').show();
		$('#carousel3dWork').hide();
		$('#carouselKabesinaWork').hide();
	});

	$(document).on('click', '#work-3', function(){
		$('#carousel3dWork').show();
		$('#carouselKabesinaWork').hide();
		$('#carouselDesignsWork').hide();
	});
	
	$('#send-email').submit(function(e){
		e.preventDefault();
		var formData = new FormData(this);
		$.ajax({
			url: "import/send-email.php",
			dataType: 'text',
			type: 'post',
			contentType: false,
			processData: false,
			data: formData,
			success: function(response) {
				if(response) {
					alert(response);
				}
			}, error: function(xhr) {
				alert("Error loading data! Reason: " + xhr.status + " " + xhr.statusText);
			}
		});
	});
	
});

function revealFade(){
	var revealArr = document.querySelectorAll('.fade-in');

	for(var i = 0; i < revealArr.length; i++){
		var windowHeight = window.innerHeight;
		var revealTop = revealArr[i].getBoundingClientRect().top;
		var revealpoint = 150;

		if (revealTop < windowHeight - revealpoint) {
			revealArr[i].classList.add('active');
		} else {
			revealArr[i].classList.remove('active');
		}
	}
}

function revealGrow(){
	var revealArr = document.querySelectorAll('.grow');

	for(var i = 0; i < revealArr.length; i++){
		var windowHeight = window.innerHeight;
		var revealTop = revealArr[i].getBoundingClientRect().top;
		var revealpoint = 300;

		if (revealTop < windowHeight - revealpoint) {
			revealArr[i].classList.add('active');
		} else {
			revealArr[i].classList.remove('active');
		}
	}
}

function toBigger(value){
	var data = 0;
	if (value >= 0 & value <= 133) {
		data = 1;
	} else if (value >= 133 & value <= 267) {
		data = 1.1;
	} else if (value >= 267 & value <= 400) {
		data = 1.2;
	} else if (value >= 400 & value <= 533) {
		data = 1.3;
	} else if (value >= 533 & value <= 667) {
		data = 1.4;
	} else if (value >= 667 & value <= 800) {
		data = 1.5;
	} else if (value >= 800) {
		data = 1.6;
	}
	return data;
}

function toSmaller(value){
	var data = 0;
	if (value >= 0 & value <= 133) {
		data = 1;
	} else if (value >= 133 & value <= 267) {
		data = 0.95;
	} else if (value >= 267 & value <= 400) {
		data = 0.9;
	} else if (value >= 400 & value <= 533) {
		data = 0.85;
	} else if (value >= 533 & value <= 667) {
		data = 0.8;
	} else if (value >= 667 & value <= 800) {
		data = 0.75;
	} else if (value >= 800) {
		data = 0.7;
	}
	return data;
}