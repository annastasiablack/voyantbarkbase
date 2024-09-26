import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AddDogController extends Controller {
  @service store;

  @tracked name = '';
  @tracked gender = '';
  @tracked breed = '';
  @tracked birthday = '';
  @tracked weight = '';
  @tracked image = '';
  @tracked ownerName = '';
  @tracked ownerPhoneNumber = '';
  @tracked favoriteToy = '';
  @tracked microchipID = '';
  @tracked vaccinesUpToDate = '';
  @tracked spayedNeutered = '';

  @action
  async saveDog(event) {
    event.preventDefault();
    
    try {
      // Fetch all existing dogs to determine the next id
      const dogs = await this.store.findAll('dog');
      const nextId = dogs.length > 0 ? Math.max(...dogs.map(dog => parseInt(dog.id))) + 1 : 1;

      const newDog = this.store.createRecord('dog', {
        id: nextId.toString(),
        name: this.name,
        gender: this.gender,
        breed: this.breed,
        birthday: this.birthday,
        weight: this.weight,
        image: this.image,
        ownerName: this.ownerName,
        ownerPhoneNumber: this.ownerPhoneNumber,
        favoriteToy: this.favoriteToy,
        microchipID: this.microchipID,
        vaccinesUpToDate: this.vaccinesUpToDate,
        spayedNeutered: this.spayedNeutered
      });

      await newDog.save();
      this.transitionToRoute('index');
    } catch (error) {
      console.error('Error saving dog:', error);
    }
  }
}