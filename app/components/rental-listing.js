import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  isWide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
  }
});
