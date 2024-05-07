import Component from '@ember/component';
import $ from 'jquery';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    var lastScrollTop = 0;
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      const navbar = document.querySelector('nav');
      const nav = document.querySelector('nav .logo img');
      if (scroll > lastScrollTop) {
        navbar.classList.add('animated');
      } else {
        navbar.classList.remove('animated');
      }
      lastScrollTop = scroll;

      if (scroll > 100) {
        nav.classList.add('changed');
      } else if (scroll <= 100) {
        nav.classList.remove('changed');
      }

      var elements = [
        $('.recent-works .work'),
        $('.cards, .services h1, .services p'),
        $('.ending .bg, .ending h1, .ending a'),
      ];
      elements.forEach((element) => {
        var isInView =
          element.offset().top < $(window).scrollTop() + $(window).height();

        if (isInView && !element.hasClass('animated')) {
          element.addClass('animated');
          element.animate({ opacity: 1 }, 1500);
        }
      });
    });
  },
});
