import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const { Object } = Ember;

moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
  integration: true
});

test('should toggle wide class on click', function(assert) {
  assert.expect(3);
  // TODO: try to use a factory here
  let stubRental = Object.create({
    image: 'fake.png',
    title: 'test-title',
    owner: 'test-owner',
    type: 'test-type',
    city: 'test-city',
    bedrooms: 3
  });

  // This create a rentalObj that is visible in the componend scope
  this.set('rentalObj', stubRental);
  // Render our component using the stubbed object as rental object
  this.render(hbs`{{rental-listing rental=rentalObj}}`);

  assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');
  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');
  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
});
