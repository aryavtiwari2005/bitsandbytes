import Component from '@ember/component';
import $ from 'jquery';

const navToggle = (toggle) => {
  const lines = document.querySelectorAll('nav .tray-icon div');
  const links = document.querySelector('nav .links');

  if (toggle) {
    lines.forEach((element) => {
      element.classList.add('toggled');
    });

    links.classList.add('opened');
  } else {
    lines.forEach((element) => {
      element.classList.remove('toggled');
    });

    links.classList.remove('opened');
  }
};

const renderNav = () => {
  const trayIcon = document.querySelector('nav .tray-icon');
  var trayIconToggle = false;
  trayIcon.addEventListener('click', () => {
    trayIconToggle = !trayIconToggle;
    navToggle(trayIconToggle);
  });

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
  });
};

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    renderNav();
  },
  didRender() {
    this._super(...arguments);
    renderNav();
  },
});
