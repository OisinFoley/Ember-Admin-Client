import Ember from 'ember';

const { inject, Component } = Ember;

export default Component.extend({
  tagName: '',
  projectsService: inject.service('projectsservice'),
  actions: {
    openRuntimeProj(projectidid) {
      /* takes in a project id,
      *  opens the project
      *  returns void
      */
      let selectedRuntime;

      //In the future, here we should grab the selectedValue of a dropdown-list
      this.get('usePreprodUrl') === true? selectedRuntime = 'preprod': selectedRuntime = 'test';

      window.open(
        `http://dash-${selectedRuntime}.azurewebsites.net/runtime/#/project/${projectidid}`,
        '_blank' // <- This is what makes it open in a new tab.
      );

    },

    deleteProject(projectid) {
      /* takes in a project id,
      *  calls deleteProject from injected service
      *  after promise is returned, an action passes up to controller asking to refresh project list
      *  this function returns void
      */

      //quick confirm prompt in case of accidental clicking of delete button
      if (confirm("Are you sure? - Can't be undone") === true) {
        let selectedRuntime;

        //in the future, this should make use of a switch, where we check the value of a dropdown-list
        this.get('usePreprodUrl') === true? selectedRuntime = 'preprod': selectedRuntime = 'test';

        this.get('projectsService').deleteProject(selectedRuntime, projectid,
        (response) => {
          alert(`Delete completed for: ${response}. \nReloading list...`);
          this.sendAction('projectDeleted');
        },
        (errorMessage) => {
          alert(`There was an error deleting the project: ${errorMessage}`);
        });

      }

    }

  }

});

