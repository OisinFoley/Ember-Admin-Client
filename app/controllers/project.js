import Ember from 'ember';

const { inject, Controller, $ } = Ember;

export default Controller.extend({
  //array will be looped through in order to load data for the different runtimes
  //if we create a dropdown later, then this list can be looped to populate that dropdown
  baseUrls: ['preprod','test'],
  ProjectsService: inject.service('projectsservice'),
  //as you add more runtimes, remove this next property
  usePreprod:true,
  init: function() {
    this._super();

    this.send('loadRuntimeLists');
  },
  actions: {
    switchRuntimeUrl() {

      //toggle between 2 available runtimes
      this.set('usePreprod', !this.get('usePreprod'));

    },
    loadRuntimeLists(){

      //Value of "this" will change inside our forEach loop, hence need for creating "_this"
      let _this = this;

      this.get('baseUrls').forEach(function (Url) {
        _this.get('ProjectsService').getProjects(`${Url}`).then((json) => {
          _this.set(`dash${Url}Data`, json);
        });
      })

    }
  }
});


