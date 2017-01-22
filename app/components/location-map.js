import Ember from 'ember';

const { Component, inject } = Ember;

export default Component.extend({
  maps: inject.service(),

  didInsertElement() {
    this._super(...arguments);
    let location = this.get('location');
    let mapElement = this.get('maps').getMapElement(location);
    this.$('.map-container').append(mapElement);
  }
});
