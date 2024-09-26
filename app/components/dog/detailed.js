import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DogDetailsComponent extends Component {
  @tracked toggleEdit = false;

  @action
  updateName(dog, event) {
    dog.name = event.target.value;
  }
  updateGender(dog, event) {
    dog.gender = event.target.value;
  }
  updateBirthday(dog, event) {
    dog.birthday = event.target.value;
  }
  updateWeight(dog, event) {
    dog.weight = event.target.value;
  }
  updateFavoriteToy(dog, event) {
    dog.favoriteToy = event.target.value;
  }
  updateOwnerName(dog, event) {
    dog.ownerName = event.target.value;
  }
  updateOwnerPhoneNumber(dog, event) {
    dog.ownerPhoneNumber = event.target.value;
  }
  updateMicrochipID(dog, event) {
    dog.microchipID = event.target.value;
  }

  @action
  toggleEditMode() {
    this.toggleEdit = !this.toggleEdit;
  }

  @action
  async saveDog(event) {
    event.preventDefault();
    try {
      await this.args.dog.save();
    } catch (error) {
      console.error('Error saving dog:', error);
    }
  }
}
