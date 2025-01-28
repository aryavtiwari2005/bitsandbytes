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
  let trayIconToggle = false;
  trayIcon.addEventListener('click', () => {
    trayIconToggle = !trayIconToggle;
    navToggle(trayIconToggle);
  });

  let lastScrollTop = 0;
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();
    const navbar = document.querySelector('nav');
    const nav = document.querySelector('nav .logo img');

    // Check if the user is scrolling down or up
    if (scroll > lastScrollTop) {
      // Scrolling down
      navbar.classList.add('animated');
    } else {
      // Scrolling up
      navbar.classList.remove('animated');
    }

    // Update lastScrollTop
    lastScrollTop = scroll;

    if (scroll > 110) {
      nav.classList.add('changed');
    } else {
      nav.classList.remove('changed');
    }

    if (scroll < 100) {
      navbar.classList.remove('animated'); // Remove animation class at the top
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