import Ember from 'ember';
import config from './config/environment';

const { Router } = Ember;

const rentalsRouter = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

rentalsRouter.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals', function() {
    this.route('show', { path: '/:rental_id' });
  });
});

export default rentalsRouter;
