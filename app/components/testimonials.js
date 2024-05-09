import Component from '@ember/component';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const nextFunc = async (review, reviewer, company, direction, anim = true) => {
  const reviewElm = document.querySelector('.testimonial p.review');
  const reviewerElm = document.querySelector(
    '.testimonial .company .content h2',
  );
  const companyElm = document.querySelector('.testimonial .company .content p');

  if (anim) {
    reviewElm.style.animation = `${direction} 0.5s ease-in 0s 1 normal`;
    reviewerElm.style.animation = `${direction} 0.5s ease-in 0s 1 normal`;
    companyElm.style.animation = `${direction} 0.5s ease-in 0s 1 normal`;
    await sleep(300);
  }

  reviewElm.innerText = review;
  reviewerElm.innerText = reviewer;
  companyElm.innerText = company;

  if (anim) {
    reviewElm.style.animation = `${direction} 1s ease-in 0s 1 reverse`;
    reviewerElm.style.animation = `${direction} 1s ease-in 0s 1 reverse`;
    companyElm.style.animation = `${direction} 1s ease-in 0s 1 reverse`;
    await sleep(800);
  }

  reviewElm.style.animation = 'none';
  reviewerElm.style.animation = 'none';
  companyElm.style.animation = 'none';
};

const numController = (num, review, reviewer, company, direction) => {
  if (num == 0) {
    nextFunc(review, reviewer, company, (direction = direction));
  } else if (num == 1) {
    nextFunc(
      `"The Bits and Bytes team was nothing but highly professional, incredibly efficient, quick to respond, and organized. We are ecstatic about the finished product & would definitely recommend them."`,
      'Vedant Rawat',
      'Global head of Fab n Fit',
      (direction = direction),
    );
  } else if (num == 2) {
    nextFunc(
      `"I cannot recommend Bits and Bytes highly enough. They are incredibly professional, as well as talented. I relied on them heavily for best practices and to take our website to the next level.`,
      'Samarth Aggarwal',
      'Executive at Casero Games',
      (direction = direction),
    );
  }
};

export default Component.extend({
  review: `"We're so happy with how our new brand is looking. The team did a fantastic job coming up with concepts, executing each page, and iterating based on feedback. Would love to work with you all again for future projects!"`,
  reviewer: 'Kaartik Singh',
  company: 'Director of MG Organics',
  num: 0,
  didInsertElement() {
    this._super(...arguments);
    nextFunc(this.review, this.reviewer, this.company, false);
  },
  didRender() {
    this._super(...arguments);
    nextFunc(this.review, this.reviewer, this.company, false);
  },
  actions: {
    next() {
      this.num += 1;
      if (this.num > 2) this.num = 0;
      console.log(this.num);
      numController(this.num, this.review, this.reviewer, this.company, 'next');
    },
    back() {
      this.num -= 1;
      if (this.num < 0) this.num = 2;
      console.log(this.num);
      numController(this.num, this.review, this.reviewer, this.company, 'back');
    },
  },
});
