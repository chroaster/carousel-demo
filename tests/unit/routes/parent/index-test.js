import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | parent/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:parent/index');
    assert.ok(route);
  });
});
