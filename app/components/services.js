import Component from '@ember/component';
import $ from 'jquery';

const renderServices = () => {
  var lastScrollTop = 0;
  $(window).scroll(function () {
    var elements = [
      $('.recent-works .work'),
      $('.services .cards, .services h1, .services p'),
    ];
    elements.forEach((element) => {
      if (!element.offset()) return;
      var isInView =
        element.offset().top < $(window).scrollTop() + $(window).height();

      if (isInView && !element.hasClass('animated')) {
        element.addClass('animated');
        element.animate({ opacity: 1 }, 1500);
      }
    });
  });
};

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    renderServices();
  },
  didRender() {
    this._super(...arguments);
    renderServices();
  },
});
