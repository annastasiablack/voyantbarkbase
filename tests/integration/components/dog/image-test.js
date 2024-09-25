import { module, test } from 'qunit';
import { setupRenderingTest } from 'voyantbarkbase/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dog/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Dog::Image />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Dog::Image>
        template block text
      </Dog::Image>
    `);

    assert.dom().hasText('template block text');
  });
});
