/* js file */

(function( window, undefined ){

	$( document ).ready(function() {

		$(".toggle .green").hide();

		$(".toggle .red").click(function(e){

			$(".toggle .red").hide();
			$(".toggle .green").show();

			e.preventDefault();
		});

		$(".toggle .green").click(function(e){

			$(".toggle .green").hide();
			$(".toggle .red").show();

			e.preventDefault();
		});

		$(".available").hide();
		$(".history").hide();


		$("#current").click(function(e){
			$(".available").hide();
			$(".history").hide();
			$(".current").slideDown(1000);

			e.preventDefault();
		});

		$("#available").click(function(e){

			$(".current").hide();
			$(".history").hide();
			$(".available").slideDown(1000);

			e.preventDefault();
		});


		$("#history").click(function(e){

			$(".current").hide();
			$(".available").hide();
			$(".history").slideDown(1000);

			e.preventDefault();
		});

		

	});

	

})( window, undefined );