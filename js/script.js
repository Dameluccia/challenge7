jQuery(function($) {
                $(document).ready( function() {

                  $('.navi').stickUp();
                  $("#owl-demo").owlCarousel({

     autoPlay: 3000, //Set AutoPlay to 3 seconds

     items : 3,
     itemsDesktop : [1199,3],
     itemsDesktopSmall : [979,3]

 });
 $('.js-scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
                });
              });
