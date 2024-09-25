import Model, { attr } from '@ember-data/model';


export default class DogModel extends Model {
  @attr name;
  @attr gender;
  @attr breed;
  @attr birthday;
  @attr weight;
  @attr image;
  @attr ownerName;
  @attr ownerPhoneNumber;
  @attr favoriteToy;
  @attr microchipID;
  @attr vaccinesUpToDate;
  @attr spayedNeutered;
}