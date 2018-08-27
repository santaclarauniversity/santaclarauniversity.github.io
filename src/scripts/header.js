$(() => {

  const Header = {
    dropdowns:    document.querySelectorAll('.header-scu .navbar .dropdown-toggle'),
    fixed:        document.querySelector('.header-scu .nav-fixed, header .nav-fixed.nav-fixed-custom'),
    section:      document.querySelector('.header-scu'),

    init:         () => {
      if (Header.fixed) {
        Header.affix();
      }

      if (Header.dropdowns) {
        Header.dropdown();
      }
    },

    // 'stick' part of header to top when scrolling down page
    affix:        () => {
      window.addEventListener('scroll', () => {
        if (100 <= Math.round(window.scrollY)) {
          Header.fixed.classList.remove('initial');
        } else {
          Header.fixed.classList.add('initial');
        }
      });
    },

    // re-enable click on dropdown menu items (bootstrap 4 prevents by default)
    dropdown:     () => {
      [].forEach.call(Header.dropdowns, (menu) => {
        menu.addEventListener('click', () => {
          window.open(menu.href, '_self')
        });
      });
    }
  };
  const Search = {
    input:        null,
    overlay:      document.querySelector('.search-module'),
    results:      document.querySelector('.search-module-results'),
    switcher:     document.querySelector('.search-module #select2-header'),
    triggerExit:  document.querySelector('.search-module .close-btn'),
    triggerOpen:  document.querySelector('header .fa-search'),

    open:         false,

    init:         () => {
      Search.listen();
      Search.select2();
    },

    listen:       () => {
      Search.triggerExit.addEventListener('click', (event) => {
        event.preventDefault();

        Search.unbind();
        Search.toggle();
      });

      Search.triggerOpen.addEventListener('click', (event) => {
        event.preventDefault();

        Search.toggle();
        Search.bind();
      });
    },

    bind:         () => {
      Search.input = document.querySelector('.search-module input.gsc-input');
      Search.input.focus();

      // hide "header" after typing
      $(Search.input).on('change paste keyup', () => {
        $('.search-header').fadeOut();
        $(this).show();
      });

      // close on ESC
      $(document).on('keyup', (event) => {
        if (event.keyCode === 27) {
          event.preventDefault();

          Search.unbind();
          Search.toggle();
        }
      })
    },

    unbind:       () => {
      $(Search.input).off('change paste keyup');
      $(document).off('keyup');
    },

    toggle:       () => {
      Search.overlay.setAttribute('aria-hidden', `${Search.open}`);
      Search.overlay.classList.toggle('search-module--open');
      $(Search.results).toggle();

      Search.open = !Search.open;
    },

    select2:      () => {
      $(Search.switcher).selectWoo({ theme: 'bootstrap4', width: '100%' });
      $(Search.switcher).on('select2:select', (event) => {
        window.location = $(event.target).val();
      });
    }
  };
  const SearchEngine = {
    init: () => {
      window.__gcse = {
        parsetags: 'explicit',
        callback: () => {
          if (document.readyState === 'complete') {
            // Document is ready when CSE element is initialized.
            // Render an element with both search box and search results in div with id 'test'.
            google.search.cse.element.render({
              div: 'search-input',
              tag: 'searchbox'
            }, {
              div: 'search-module-results',
              tag: 'searchresults'
            });
          } else {
            // Document is not ready yet, when CSE element is initialized.
            google.setOnLoadCallback(function () {
              // Render an element with both search box and search results in div with id 'test'.
              google.search.cse.element.render({
                div: 'search-input',
                tag: 'searchbox'
              }, {
                div: 'search-module-results',
                tag: 'searchresults'
              });
            }, true);
          }
        }
      };

      let gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=015735913753929981099:fyhgumyaibi';

      let s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    }
  };

  // enable header scripts ONLY if the page has an SCU header
  if (Header.section) {
    Header.init();
  }

  // enable search function ONLY on pages that have the overlay
  if (Search.overlay) {
    Search.init();
    SearchEngine.init();
  }

});
