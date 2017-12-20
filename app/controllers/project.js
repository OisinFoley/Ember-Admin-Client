import Ember from 'ember';

const { inject, Controller } = Ember;

export default Controller.extend({
  projectsService: inject.service('projectsservice'),
  init() {
    this._super(...arguments);
    this.send('loadRuntimeLists');
  },
  actions: {
    switchRuntimeUrl() {
      this.toggleProperty('usePreprod');
    },
    loadRuntimeLists(){

      let runtime = location.href.substring((window.location.href.indexOf('dash')), window.location.href.indexOf('.'));
      this.set('runtime', runtime);

      this.get('projectsService').getProjects(runtime).then((json) => {
        this.set(`runtimeProjects`, json);
      });
    }
  }
});


