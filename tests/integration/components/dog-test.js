import { module, test } from 'qunit';
import { setupRenderingTest } from 'voyantbarkbase/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dog', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a dog', async function (assert) {
    this.setProperties({
      dog: {
        name: 'Kaladin',
        gender: 'Male',
        breed: 'Doberman Pinscher',
        birthday: '09/21/2020',
        weight: 80,
        coloring: 'black, brown',
        image:
          'https://preview.redd.it/j2u52niuvb121.jpg?width=640&crop=smart&auto=webp&s=0f5beff3701e947b90d61727de95575bc2dff3ce',
        ownerName: 'Annastasia Black',
        ownerPhoneNumber: '205-370-7971',
        favoriteToy: 'bone',
        microchipID: '00000123',
        vaccinesUpToDate: true,
        spayedNeutered: true,
      },
    });
    await render(hbs`<Dog @dog={{this.dog}} />`);

    assert.dom('article').hasClass('dog');
    assert.dom('article h3').hasText('Kaladin');
    assert.dom('article .image').exists();
  });
});
