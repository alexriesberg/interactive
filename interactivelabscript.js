$(document).ready(function() {
	$("div").hide();

	$(".answer").on("click", function() {
		$("div").show();

		$("div").makeItRain();		
	});
});