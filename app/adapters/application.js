import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  updateRecord(store, type, snapshot) {
    const data = this.serialize(snapshot, { includeId: true });
    const id = snapshot.id;
    const url = `${this.buildURL(type.modelName, id, snapshot, 'updateRecord')}/dogs.json`;

    return this.ajax(url, 'PATCH', { data });
  }

  createRecord(store, type, snapshot) {
    console.log('test createRecord')
    const data = this.serialize(snapshot, { includeId: true });
    const url = `${this.buildURL(type.modelName, null, snapshot, 'createRecord')}/dogs.json`;

    return this.ajax(url, 'POST', { data });
  }
}