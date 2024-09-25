import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'voyantbarkbase/tests/helpers';

module('Acceptance | voyantbarkbase', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('.jumbo a.button').hasText('Dog');
    await click('.jumbo a.button');
    assert.strictEqual(currentURL(), '/dog');
  });
});

// generate: ember generate acceptance-test [test-name]
// run: ember t -s
