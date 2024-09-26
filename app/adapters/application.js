import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.apiHost || 'http://localhost:3000'; //
  namespace = 'api';

  updateRecord(store, type, snapshot) {
    const data = this.serialize(snapshot, { includeId: true });
    const id = snapshot.id;
    const url = `${this.namespace}/${type.modelName}s/${id}`;

    return fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (!response.ok) {
        throw new Error('Failed to update record');
      }
      return response.json();
    });
  }
}