import { module, test } from 'qunit';
import { setupRenderingTest } from 'voyantbarkbase/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dog/detailed', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Dog::Detailed />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Dog::Detailed>
        template block text
      </Dog::Detailed>
    `);

    assert.dom().hasText('template block text');
  });
});
