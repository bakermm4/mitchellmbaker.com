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
	});

})( window, undefined );
