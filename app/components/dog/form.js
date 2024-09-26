import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DogFormComponent extends Component {
  @action
  submitForm(event) {
    event.preventDefault();
    this.args.onSubmit(event);
  }
}
