import Ember from 'ember';

const { Service, RSVP, $ } = Ember;

const Promise = RSVP.Promise;

export default Service.extend({
  getProjects(runtime){
    /* is passed a runtime verb, eg - preprod
    *  makes call and grabs list of runtime projects
    *  reformats each project string as an object
    *  returns array of objects with each object containing project name/id
    */

    let data = $.getJSON(`http://dash-${runtime}.azurewebsites.net/api/projects`);

    return data.then((json) => {

      let records = [];
      json.forEach(function(item){
        records.push( { id: item} );
      });

      this.set('data', records);
      return records;
    });
  },
  deleteProject(runtime, projectid){
    /* is passed runtime and a project's id
    *  performs a delete based on the params passed in
    *  returns response in form of a promise
    */

    return new Promise(function(resolve) {

      let xhr = new XMLHttpRequest();
      xhr.open('DELETE', `http://dash-${runtime}.azurewebsites.net/api/projects/${projectid}`, true);
      xhr.onload = () => {
        if (xhr.status === 200) {

          resolve(xhr.responseText);

        } else {

          resolve(`failed :  xhr.responseText`);

        }
      };
      xhr.send();

    });

  }
});
