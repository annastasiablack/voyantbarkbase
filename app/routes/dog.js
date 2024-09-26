import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { findRecord } from '@ember-data/json-api/request';

export default class DogRoute extends Route {
  @service store;
  async model(params) {
    const { content } = await this.store.request(
      findRecord('dog', params.dog_id),
    );
    return content.data;
  }
}

//   async model(params) {
//     let response = await fetch(`/api/dogs/${params.dog_id}.json`);
//     let { data } = await response.json();

//     let { id, attributes } = data;

//     return { id, ...attributes };
//   }
// }
