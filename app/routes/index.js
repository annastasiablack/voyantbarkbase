import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { query } from '@ember-data/json-api/request';

export default class IndexRoute extends Route {
    @service store;
    async model() {
        const { content } = await this.store.request(query('dog'));
        return content.data;
      }
    }
//   async model() {
//     let response = await fetch('/api/dogs.json');
//     let { data } = await response.json();
//     return data.map((model) => {
//       let { id, attributes } = model;
//       return { id, ...attributes };
//     });
//   }
// }
