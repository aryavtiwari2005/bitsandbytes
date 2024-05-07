import Component from '@ember/component';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const changeContent = (progress) => {
  const heading = document.querySelector(
    '.process .process-slider .content h2',
  );
  const para = document.querySelector('.process .process-slider .content p');
  const image = document.querySelector('.process .process-slider img');

  if (progress >= 83.33) {
    heading.innerHTML = 'Feedback';
    para.innerHTML =
      "We value your feedback, as it's crucial for us to bring your website vision to life. Please don't hesitate to contact us with any comments or suggestions.";
    image.src = '/assets/feedback.png';
  } else if (progress >= 66.66) {
    heading.innerHTML = 'Launch';
    para.innerHTML =
      'With over 16+ years of industry experience, we provide technical support before and after your website goes live.';
    image.src = '/assets/launch.png';
  } else if (progress >= 50) {
    heading.innerHTML = 'Testing';
    para.innerHTML =
      'Our skilled team carefully checks the interface to make sure it works well, finding and fixing any problems that could cause the website to fail.';
    image.src = '/assets/testing.png';
  } else if (progress >= 30) {
    heading.innerHTML = 'Design & Development';
    para.innerHTML =
      'By combining various elements like aesthetics, navigation, color scheme, and more, our expert designers and developers work together to create a cutting-edge prototype.';
    image.src = '/assets/design.png';
  } else if (progress >= 15) {
    heading.innerHTML = 'Plan';
    para.innerHTML =
      'After gathering the necessary information, we move forward to plan different aspects of the project, such as selecting the web platform and ensuring on-time delivery.';
    image.src = '/assets/plan.png';
  } else {
    heading.innerHTML = 'Meet';
    para.innerHTML =
      "We define our purpose by understanding client's requirement thoroughly, We design websites that engage the target audience and boost ROI. With clear UI/UX, Seo Optimized content, we ensure our sites achieve high client goals.";
    image.src = '/assets/meet.png';
  }
};

export default Component.extend({
  progress: 0,
  didInsertElement() {
    this._super(...arguments);
    const progressBar = document.querySelector(
      '.process .progress-bar span.whole-progress',
    );
    setInterval(() => {
      if (this.progress >= 100) {
        this.progress = 0;
      }
      this.progress += 0.0166;
      progressBar.style.width = `${this.progress}%`;
      changeContent(this.progress);
    }, 10);
  },
  actions: {
    contentChanger(name) {
      const heading = document.querySelector(
        '.process .process-slider .content h2',
      );
      const para = document.querySelector(
        '.process .process-slider .content p',
      );
      const image = document.querySelector('.process .process-slider img');

      if (name == 'feedback') {
        heading.innerHTML = 'Feedback';
        para.innerHTML =
          "We name your feedback, as it's crucial for us to bring your website vision to life. Please don't hesitate to contact us with any comments or suggestions.";
        image.src = '/assets/feedback.png';
        this.progress = 83.33;
      } else if (name == 'launch') {
        heading.innerHTML = 'Launch';
        para.innerHTML =
          'With over 5+ years of industry experience, we provide technical support before and after your website goes live.';
        image.src = '/assets/launch.png';
        this.progress = 66.66;
      } else if (name == 'testing') {
        heading.innerHTML = 'Testing';
        para.innerHTML =
          'Our skilled team carefully checks the interface to make sure it works well, finding and fixing any problems that could cause the website to fail.';
        image.src = '/assets/testing.png';
        this.progress = 50;
      } else if (name == 'design') {
        heading.innerHTML = 'Design & Development';
        para.innerHTML =
          'By combining various elements like aesthetics, navigation, color scheme, and more, our expert designers and developers work together to create a cutting-edge prototype.';
        image.src = '/assets/design.png';
        this.progress = 30;
      } else if (name == 'plan') {
        heading.innerHTML = 'Plan';
        para.innerHTML =
          'After gathering the necessary information, we move forward to plan different aspects of the project, such as selecting the web platform and ensuring on-time delivery.';
        image.src = '/assets/plan.png';
        this.progress = 15;
      } else if (name == 'meet') {
        heading.innerHTML = 'Meet';
        para.innerHTML =
          "We define our purpose by understanding client's requirement thoroughly, We design websites that engage the target audience and boost ROI. With clear UI/UX, Seo Optimized content, we ensure our sites achieve high client goals.";
        image.src = '/assets/meet.png';
        this.progress = 0;
      }
    },
  },
});
