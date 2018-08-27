$(() => {

  let body = $('html, body');

  const Homepage = {

    content:        document.querySelector('.homepage-content'),
    overlay:        document.querySelector('.container-homepage .overlay'),
    overlayActions: document.querySelector('.container-homepage .actions'),
    overlaySkip:    document.querySelector('.container-homepage .fa-chevron-down'),
    video:          document.querySelector('.container-homepage video'),

    init:           () => {
      if (Homepage.content && Homepage.overlay) {
        Homepage.scroll();
        Homepage.skip();
      }
    },

    scroll:         () => {
      let mark = 0;

      window.addEventListener('scroll', () => {
        let pos = window.scrollY;

        if (0 === pos) {
          $(Homepage.video).get(0).play();

          mark = 0;
        } else if (pos > 0 && pos < window.innerHeight) {
          $(Homepage.video).get(0).pause();

          if (mark === 0) {
            $(Homepage.overlay).fadeTo('fast', .75, () => {
              Homepage.overlayActions.classList.remove('fadeOutDown');
              Homepage.overlayActions.classList.add('fadeInUp');
            });
          } else if (mark > window.innerHeight) {
            $(Homepage.overlay).fadeTo('fast', .02, () => {
              Homepage.overlayActions.classList.remove('fadeInUp');
              Homepage.overlayActions.classList.add('fadeOutDown');
            });
          }

          mark = pos;
        } else if (pos > window.innerHeight) {
          mark = pos;
        }
      });
    },

    skip:           () => {
      Homepage.overlaySkip.addEventListener('click', () => {
        body.animate({ scrollTop: $(Homepage.content).offset().top }, 'slow');
      });
    },

  };

  Homepage.init();

});
