import EmberRouter from '@ember/routing/router';
import config from 'bitsandbytes/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;

  constructor() {
    super(...arguments);
    this.on('routeDidChange', () => window.scrollTo(0, 0));
  }
}

Router.map(function () {
  this.route('contact-us');
});
