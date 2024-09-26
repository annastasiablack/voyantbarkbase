import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service store;

  findAll(store, type) {
    const localData = localStorage.getItem(type.modelName);
    return localData ? JSON.parse(localData) : [];
  }

  findDog(store, type, id) {
    const localData = localStorage.getItem(type.modelName);
    const records = localData ? JSON.parse(localData) : [];
    return records.find(record => record.id === id);
  }

  createDog(store, type, snapshot) {
    const serialized = snapshot.serialize();
    const localData = localStorage.getItem(type.modelName);
    const records = localData ? JSON.parse(localData) : [];
    records.push(serialized);
    localStorage.setItem(type.modelName, JSON.stringify(records));
    return serialized;
  }

  updateDog(store, type, snapshot) {
    const serialized = snapshot.serialize();
    const localData = localStorage.getItem(type.modelName);
    let records = localData ? JSON.parse(localData) : [];
    const index = records.findIndex(record => record.id === serialized.id);
    if (index !== -1) {
      records[index] = serialized;
      localStorage.setItem(type.modelName, JSON.stringify(records));
    }
    return serialized;
  }

  deleteDog(store, type, snapshot) {
    const serialized = snapshot.serialize();
    const localData = localStorage.getItem(type.modelName);
    let records = localData ? JSON.parse(localData) : [];
    records = records.filter(record => record.id !== serialized.id);
    localStorage.setItem(type.modelName, JSON.stringify(records));
    return null;
  }
}