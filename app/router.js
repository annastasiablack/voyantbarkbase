import EmberRouter from '@ember/routing/router';
import config from 'voyantbarkbase/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
Router.map(function () {
  this.route('add-dog');
  this.route('dog', { path: '/dogs/:dog_id' });
  this.route('dogs', function() {
    this.route('dog', { path: '/:dog_id' });
  });
});
