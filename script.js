$(document).ready(function(){console.log("js working");

	$('#toggle').click(function(){
		$('#moustache_image').toggle();
	});

	$('#btrigger').click(function(){
		$("#potato").toggleClass('ColorC');
	});
});