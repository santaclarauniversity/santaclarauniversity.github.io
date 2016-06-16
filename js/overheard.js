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


    // Check orientation and aspect ratio of photo posts once images have loaded
    window.onload = function(){

        $('.overheard.mod-photo').each(function(){

            var $overheard = $(this),
                $img = $overheard.find('.overheard-image'),
                $citation = $overheard.find('.overheard-footer');

            // wide photos
            if ( $img.width()/$img.height() > $overheard.width()/$overheard.height() ) {
                $overheard.addClass('mod-wide').addClass('is-visible');
            }            
            
            // horizontal photos with narrower aspect ratio than overheard box
            if (  $img.width()/$img.height() < $overheard.width()/$overheard.height() && $img.width() >= $img.height() ) {
                $overheard.addClass('is-visible');
            }

            // vertical photos
            if ( $img.width() < $img.height() ) {
              
                // vertical photos without citation box are larger
                if ( ! $citation.length || $citation.is(':empty') ) {
                    $overheard.addClass('mod-large-photo');
                }
              
                $overheard.addClass('mod-vertical').addClass('is-visible');
                $overheard.find('.overheard-caption').css('margin-left', $img.width()+30);
            }
        });
    };


})(window, document, window.jQuery);