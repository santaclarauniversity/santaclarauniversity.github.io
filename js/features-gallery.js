$(function() {
  var $gallery = $('.gallery.module'),
      $image   = $gallery.find('.full-image .gallery-image img'),
      $caption = $gallery.find('.full-image .gallery-caption');


  $gallery.on('click', '.slides .gallery-image', function(e) {
    e.preventDefault();

    var $this = $(this),
        img_src = $this.find('.thumbnail img').attr('src'),
        caption = $this.find('.gallery-caption').html() || '';

    $image.fadeOut(100, function() {
      $image.attr('src', img_src);
    }).fadeIn(100);

    $caption.html(caption);

    return true;
  });
  
  
  var thumbSlider = function() {
    
    $gallery.find('.slides').mCustomScrollbar("destroy"); 

    if (Modernizr.mq('(max-width: 767px)')){

      // Show horizontal thumbnail scrollbar on small screens
      $gallery.find('.slides').mCustomScrollbar({
          axis:"x", // horizontal scrollbar
          advanced:{autoExpandHorizontalScroll:true}
      }).show();
    
    } else {
      
      // Show vertical thumbnail scrollbar on larger screens
      $gallery.find('.slides').mCustomScrollbar().show();
    }
  }
   
  // Show thumbnail scrollbar after images load
  // Destroy and create a new scrollbar when window is resized
  $(window).on('load resize',function(){
    thumbSlider();
  });
});
