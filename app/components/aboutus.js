import Component from '@ember/component';

const changeValues = (toggle, num) => {
  const valueHeader = document.querySelector(
    `.about-us .our-values .values .value${num} h2`,
  );
  const line1 = document.querySelector(
    `.about-us .our-values .values .value${num} .cross span.line1`,
  );
  const line2 = document.querySelector(
    `.about-us .our-values .values .value${num} .cross span.line2`,
  );
  const content = document.querySelector(
    `.about-us .our-values .values .value${num} p`,
  );
  if (toggle) {
    valueHeader.style.color = '#333';
    line1.classList.add('toggled');
    line2.classList.add('toggled');
    content.classList.add('toggled');
  } else {
    valueHeader.style.color = '#33333370';
    line1.classList.remove('toggled');
    line2.classList.remove('toggled');
    content.classList.remove('toggled');
  }
};

export default Component.extend({
  toggled1: false,
  toggled2: false,
  toggled3: false,
  toggled4: false,
  actions: {
    valuesChanges(num) {
      if (num == 1) {
        this.toggled1 = !this.toggled1;
        changeValues(this.toggled1, num);
      } else if (num == 2) {
        this.toggled2 = !this.toggled2;
        changeValues(this.toggled2, num);
      } else if (num == 3) {
        this.toggled3 = !this.toggled3;
        changeValues(this.toggled3, num);
      } else if (num == 4) {
        this.toggled4 = !this.toggled4;
        changeValues(this.toggled4, num);
      }
    },
  },
});
