import Model, { attr } from '@ember-data/model';

export default class DogModel extends Model {
  // @attr('number') id;
  // @attr('string') name;
  // @attr('string') gender;
  // @attr('string') breed;
  // @attr('string') birthday;
  // @attr('string') weight;
  // @attr('string') image;
  // @attr('string') ownerName;
  // @attr('string') ownerPhoneNumber;
  // @attr('string') favoriteToy;
  // @attr('string') microchipID;
  // @attr('boolean') vaccinesUpToDate;
  // @attr('boolean') spayedNeutered;

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
