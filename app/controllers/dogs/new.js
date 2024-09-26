import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class DogsNewController extends Controller {
  @service dogs;
  @service router;

  @action
  async saveDog(event) {
    // todo - research this
    event.preventDefault();
    try {
      console.log('this.model:', this.model, event)
      await this.dogs.createDog(this.model);
      this.router.transitionTo('index');
    } catch (error) {
      console.error('Error saving dog:', error);
      // Handle error (e.g., show error message to user)
    }
  }
}
