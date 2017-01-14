import { moduleFor, test } from 'ember-qunit';

moduleFor('route:index', 'Unit | Route | index');

test('should transition to rentals route', function(assert) {
  let route = this.subject({
    replaceWith(routeName) {
      assert.equal(routeName, 'rentals', 'replace with route name rentals');
    }
  });
  route.beforeModel();

  // This is stubbing the replaceWith behavior. Basically it is like saying:
  // expect route (this subject ) to receive replaceWith wiht 'rentals'
  // Then we call route.beforeModel() to run the code we've set the
  // expectation for.
});
