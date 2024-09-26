import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DogsDogRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('dog', params.dog_id);
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('model', model);
  }
}