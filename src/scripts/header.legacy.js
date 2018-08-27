$(() => {

  const Header = {
    collapses:    document.querySelectorAll('.header-legacy .accordion-collapses .collapse'),
    dropdowns:    document.querySelectorAll('.header-legacy .navbar .dropdown-toggle'),
    dropdownBtns: document.querySelectorAll('.header-legacy .navbar .nav-item.dropdown:not(.dropdown-search)'),
    fixedUsers:   document.querySelector('.header-legacy .nav-fixed.nav-users'),
    fixedNav:     document.querySelector('.header-legacy .nav-fixed.nav-brand, .header-legacy .nav-fixed.nav-custom'),
    searchBtn:    document.querySelector('.header-legacy .dropdown-search'),
    section:      document.querySelector('.header-legacy'),

    init:         () => {
      if (Header.fixedUsers && Header.fixedNav && !document.querySelector('.container-homepage')) {
        Header.affix();
      }

      if (Header.collapses) {
        Header.collapse();
      }

      if (Header.dropdowns && Header.dropdownBtns) {
        Header.dropdown();
      }

      if (Header.searchBtn) {
        Header.search();
      }
    },

    // 'stick' part of header to top when scrolling down page
    affix:        () => {
      window.addEventListener('scroll', () => {
        let pos =  Math.round(window.scrollY);

        // affix Users navbar as soon as scroll down happens, smoother than waiting for <header> height
        if (0 < pos) {
          Header.fixedUsers.classList.remove('initial');
        } else {
          Header.fixedUsers.classList.add('initial');
        }

        // affix brand/custom navbar beyond <header> height
        if (($(Header.section).height() - ($(Header.fixedNav).height() / 2)) <= pos) {
          Header.fixedNav.classList.remove('initial');
        } else {
          Header.fixedNav.classList.add('initial');
        }
      });
    },

    // bump brand/custom navbar down when users navbar dropdowns are unrolled
    collapse:     () => {
      $(Header.collapses)
        .on('shown.bs.collapse', (event) => {
          // toggle caret direction up/down
          $(Header.dropdownBtns).find('i')
            .removeClass('fa-caret-up').addClass('fa-caret-down');
          $(Header.dropdownBtns).find('a[href="#' + event.target.id + '"] i')
            .removeClass('fa-caret-down').addClass('fa-caret-up');

          // move navbar below now-expanded dropdown
          $(Header.fixedNav).css('top', $(Header.fixedUsers).height());
        })
        .on('hide.bs.collapse', (event) => {
          // toggle caret
          $(Header.dropdownBtns).find('a[href="#' + event.target.id + '"] i')
            .removeClass('fa-caret-up').addClass('fa-caret-down');

          // reset navbar to default top value, as defined by CSS
          $(Header.fixedNav).removeAttr('style');
        });
    },

    // re-enable click on dropdown menu items (bootstrap 4 prevents by default)
    dropdown:     () => {
      [].forEach.call(Header.dropdowns, (menu) => {
        menu.addEventListener('click', () => {
          window.open(menu.href, '_self')
        });
      });
    },

    search:       () => {
      $(Header.searchBtn).on('shown.bs.dropdown', () => {
        $(Header.searchBtn).find('input[type="search"]').get(0).focus();
      });
    }
  };

  // enable header scripts ONLY if the page has an SCU header
  if (Header.section) {
    Header.init();
  }

});
