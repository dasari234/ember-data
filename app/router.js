import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function(){
    this.route('single', {path: ":id"});
    this.route('user', {path: "user/:userId"});
  });
  this.route('users');
});

export default Router;
