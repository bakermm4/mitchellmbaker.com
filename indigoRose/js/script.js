/* js file */

(function( window, undefined ){

	$( document ).ready(function() {

		$(".artists").hide();
		$(".contact").hide();

		$("#home").click(function(e){

			$(".artists").hide();
			$(".contact").hide();
			$(".home").fadeIn(750);

			e.preventDefault();
		});

		$("#artists").click(function(e){

			$(".home").hide();
			$(".contact").hide();
			$(".artists").fadeIn(750);

			e.preventDefault();
		});

		$("#contact").click(function(e){

			$(".artists").hide();
			$(".home").hide();
			$(".contact").fadeIn(750);

			e.preventDefault();
		});
		

	});


})( window, undefined );