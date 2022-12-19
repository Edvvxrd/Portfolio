$(document).ready(function(){
	$(document).on('click', 'body', function(){
		var data = $(this).attr("class");
		var target = ["h1", "h2"];

		if (data == "to-blue") {
			$(this).addClass('to-red');
			for(var i = 0; i < target.length; i++){
				$(target[i]).addClass('to-red-font');
			}
		}else if (data == "to-red"){
			$(this).addClass('to-yellow');
			for(var i = 0; i < target.length; i++){
				$(target[i]).addClass('to-yellow-font');
			}
		} else if (data == "to-yellow"){
			$(this).addClass('to-green');
			for(var i = 0; i < target.length; i++){
				$(target[i]).addClass('to-green-font');
			}
		} else if (data == "to-green"){
			$(this).addClass('to-blue');
			for(var i = 0; i < target.length; i++){
				$(target[i]).addClass('to-blue-font');
			}
		}

		$(this).removeClass(data);
		$(':text').removeClass(data+'-font');
	});
});