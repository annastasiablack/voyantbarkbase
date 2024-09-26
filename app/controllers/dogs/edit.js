import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DogsEditController extends Controller {
  @service dogs;
  @service router;

  @action
  async saveDog() {
    await this.dogs.updateDog(this.model);
    this.router.transitionTo('index');
  }
}
