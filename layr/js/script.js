/* js file */

(function( window, undefined ){

	$( document ).ready(function() {

		$(".forgot_page").hide();

		$("#forgot").click(function(e){

			$(".login_page").hide(1000);
			$(".forgot_page").show(1000);

			e.preventDefault();
		});


		$("#reset").click(function(e){

			$(".forgot_page").hide(1000);
			$(".login_page").show(1000);
			
			e.preventDefault();
		});

	});

	

})( window, undefined );