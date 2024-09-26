import Ember from 'ember';
import moment from 'moment';

export function age(value) {
  let age = moment(value, 'MMDDYYYY').fromNow();
  return age.substring(0, age.indexOf('ago'));
}

export default Ember.Helper.helper(age);
