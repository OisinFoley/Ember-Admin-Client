import DS from 'ember-data';

const { attr, Model } = DS;

export default Model.extend({
  name: attr('string'),
  homeScreenId: attr('string'),
  settings: attr('string'),
  runtimeUrl: attr('string')
});
