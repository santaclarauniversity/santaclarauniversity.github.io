$(function() {
  var $gallery = $('.gallery.module');
  var $image   = $gallery.find('.full-image .gallery-image img');
  var $caption = $gallery.find('.full-image .gallery-caption');

  $gallery.on('click', '.slides .gallery-image', function(e) {
    e.preventDefault();

    var $this   = $(this);
    var imgSrc  = $this.find('.thumbnail img').attr('src');
    var caption = $this.find('.gallery-caption').html() || '';

    console.log($this.find('.gallery-image img').length);

    $image
      .fadeOut(100, function() {
        $image.attr('src', imgSrc);
      })
      .fadeIn(100);

    caption.html(caption);

    return true;
  });
});
