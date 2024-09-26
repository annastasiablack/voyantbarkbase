import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DogsDogRoute extends Route {
  @service store;

  model(params) {
    console.log('Dog ID:', params.dog_id); // Add this line for debugging
    return this.store.findRecord('dog', params.dog_id);
  }
}