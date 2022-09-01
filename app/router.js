import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('accounts', function() {
    this.route('login');
    this.route('register');
  });
  this.route('user', function() {
    this.route('profile');
    this.route('registration');
  });
  this.route('admin');
});

export default Router;
