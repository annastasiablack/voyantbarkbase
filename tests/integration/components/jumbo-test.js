import { module, test } from 'qunit';
import { setupRenderingTest } from 'voyantbarkbase/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

// render & test single component

module('Integration | Component | jumbo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a jumbo header', async function (assert) {
    await render(hbs`<Jumbo>Hello World</Jumbo>`);

    assert.dom(`.jumbo`).exists();
    assert.dom('.jumbo').hasText('Hello World');
    assert.dom('.jumbo .tomster').exists();
  });
});

// generate: ember generate component-test jumbo
// run: ember t -s
