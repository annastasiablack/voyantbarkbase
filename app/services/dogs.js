import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import fetch from 'fetch';

// handle create & update operations
export default class DogsService extends Service {
  @service store;

  @tracked dogs = [];

  async loadDogs() {
    this.dogs = await this.store.findAll('dog');
  }

  async createDog(dogData) {
    console.log('dog in createDog:', dog)
    const dog = this.store.createRecord('dog', dogData);
    await dog.save();
    this.dogs = [...this.dogs, dog];
    console.log('dog in createDog:', dog)
    return dog;
  }

  async updateDog(dog) {
    await dog.save();
    this.dogs = [...this.dogs];
    return dog;
  }
}
