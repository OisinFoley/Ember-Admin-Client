import DS from 'ember-data';

const { RESTSerializer } = DS;

export default DS.RESTSerializer.extend({

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType){

    return this._super(store, primaryModelClass, payload, id, requestType);

  },

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let objArray = [];

    payload.forEach((item, index) => {

      objArray.push({ id: item});
    });
    payload = { projects: objArray };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});
