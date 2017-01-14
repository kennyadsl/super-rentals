import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this._super(...arguments); // call super with same arguments
    this.replaceWith('rentals');
  }
});
