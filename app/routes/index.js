import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  beforeModel() {
    this._super(...arguments); // call super with same arguments
    this.replaceWith('rentals');
  }
});
