import Ember from 'ember';

const { Route, set, inject } = Ember;

export default Route.extend({
  //store: inject.service('store'),
  // ProjectsService: inject.service('projectsservice'),
  model(){
    // return this.store.findAll('project');
    // let data = this.get('ProjectsService').getProjects('preprod').then((json) => {
    //   return json;
    // });

    // let data = {
    //   dashPreprod: this.get('ProjectsService').getProjects('preprod'),
    //   dashTest: this.get('ProjectsService').getProjects('test')
    // };

    // return {
    //   dashPreprod: this.get('ProjectsService').getProjects('preprod'),
    //   dashTest: this.get('ProjectsService').getProjects('test')
    // };

    // return data;

    //return this.get('ProjectsService').getProjects('test');
  },
  // projects: {
  //   // this.get('ProjectsService').getProjects('test')
  // },

  setupController(controller, model){
    set(controller, 'projects', model);
  },

  actions: {
    // openRuntimeProj(id) {
    //   let data = Ember.$.getJSON(`http://dash-test.azurewebsites.net/runtime/` + id + `/project.json`);
    //
    //   data.then((json) => {
    //
    //     console.log(JSON.stringify(json));
    //
    //     window.open(
    //       'http://dash-test.azurewebsites.net/runtime/#/project/' + id + '/screen/' + json.HomeScreenId,
    //       '_blank' // <- This is what makes it open in a new window.
    //     );
    //
    //
    //     return;
    //   });
    // }
  }
});
