import { rentalPropertyType } from 'super-rentals/helpers/rental-property-type';
import { module, test } from 'qunit';

module('Unit | Helper | rental property type');

test('return the correct property type', function(assert) {
  assert.equal(rentalPropertyType(['Condo']), 'Community');
  assert.equal(rentalPropertyType(['Something else']), 'Standalone');
});
