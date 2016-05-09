// Scripts for Overheard elements in SCU Alumni section

// Make sure scripts are placed in footer

;(function(window, document, $) {

    // Initialize carousel
    $('.overheard-carousel').each(function(){

        var $carousel = $(this),
            fade = ( $carousel.hasClass('mod-fade') ) ? 'fadeOut' : '';

        $carousel.owlCarousel({
            items: 1,
            loop:true,
            margin:20,
            video: true,
            // ADJUST SCU OVERHEARD CAROUSEL TIMING HERE ----------------
            autoplay: true,            // autoplay
            autoplayTimeout: 5000,     // autoplay interval timeout
            autoplayHoverPause: true,  // pause on mouse hover
            animateOut: fade,          // use class 'mod-fade' for fade effect
        });
    });


    // Check orientation of photo posts once images have loaded
    window.onload = function(){

        $('.overheard.mod-photo').each(function(){

            var $overheard = $(this),
                $img = $overheard.find('.overheard-image'),
                $citation = $overheard.find('.overheard-footer');

            // vertical photos
            if ( $img.width() < $img.height() ) {
                $overheard.addClass('mod-vertical');
            }

            // photos without citation box
            if ( ! $citation.length || $citation.is(':empty') ) {

                $overheard.addClass('mod-large-photo');
            }
        });
    };


})(window, document, window.jQuery);