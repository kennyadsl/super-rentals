import Ember from 'ember';

const { Component, run } = Ember;

export default Component.extend({
  classNames: ['list-filter'],
  value: '',

  init() {
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('results', results));
  },

  actions: {
    handleFilterEntry() {
      // Run with debounce to avoid a lot of API calls while user
      // is still typing into the input field
      run.debounce(this, this.doHandleFilterEntry, 500);
    }
  },

  doHandleFilterEntry() {
    let filterInputValue = this.get('value');
    let filterAction = this.get('filter');
    filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults));
  }
});
