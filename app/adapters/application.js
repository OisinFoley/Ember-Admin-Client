import DS from 'ember-data';

const { RESTAdapter } = DS;

export default RESTAdapter.extend({

  host: 'http://dash-test.azurewebsites.net',
  // host: 'http://dash-preprod.azurewebsites.net',
  namespace: 'api'

});
