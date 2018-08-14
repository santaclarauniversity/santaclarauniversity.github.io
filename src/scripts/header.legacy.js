$(() => {

  const Header = {
    collapses:    document.querySelectorAll('.header-legacy .accordion-collapses .collapse'),
    dropdowns:    document.querySelectorAll('.header-legacy .navbar .dropdown-toggle'),
    fixedUsers:   document.querySelector('.header-legacy .nav-fixed.nav-users'),
    fixedNav:     document.querySelector('.header-legacy .nav-fixed.nav-brand, .header-legacy .nav-fixed.nav-custom'),
    section:      document.querySelector('.header-legacy'),

    init:         () => {
      if (Header.fixedUsers && Header.fixedNav) {
        Header.affix();
      }

      if (Header.collapses) {
        Header.collapse();
      }

      if (Header.dropdowns) {
        Header.dropdown();
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
        if (($(Header.section).height() - $(Header.fixedNav).height()) <= pos) {
          Header.fixedNav.classList.remove('initial');
        } else {
          Header.fixedNav.classList.add('initial');
        }
      });
    },

    // bump brand/custom navbar down when users navbar dropdowns are unrolled
    collapse:     () => {
      let brkpt = 1200;

      $(Header.collapses)
        .on('shown.bs.collapse', () => {
          $(Header.fixedNav).animate({
            top: $(Header.fixedUsers).height()
          });
        })
        .on('hide.bs.collapse', () => {
          $(Header.fixedNav).animate({
            top: window.innerWidth >= brkpt ? '2.7rem' : '2.4rem'
          }, 300);
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

  // enable header scripts ONLY if the page has an SCU header
  if (Header.section) {
    Header.init();
  }

});
