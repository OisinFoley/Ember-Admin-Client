import Ember from 'ember';

const { inject, Component } = Ember;

export default Component.extend({
  tagName: '',
  projectsService: inject.service('projectsservice'),
  actions: {

    /**
     * Open a runtime project in new tab.
     * @param {string} projectid - id of project to open
     */
    openRuntimeProj(projectid) {

      let selectedRuntime;

      //In the future, here we should grab the selectedValue of a dropdown-list
      this.get('usePreprodUrl') === true? selectedRuntime = 'preprod': selectedRuntime = 'test';

      window.open(
        `http://dash-${selectedRuntime}.azurewebsites.net/runtime/#/project/${projectid}`,
        '_blank' // <- This is what makes it open in a new tab.
      );

    },

    /**
     * Delete a runtime project
     * @param {string} projectid
     */
    deleteProject(projectid) {

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

