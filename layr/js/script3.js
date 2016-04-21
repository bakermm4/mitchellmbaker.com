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

		$(".paypal").hide();

		$("#e-check").click(function(e){

			$(".paypal").hide();
			$(".check").slideDown(1000);

			e.preventDefault();
		});


		$("#paypal").click(function(e){

			$(".check").hide();
			$(".paypal").slideDown(1000);
			
			e.preventDefault();
		});

	});

	

})( window, undefined );