import Ember from 'ember';

const { Service, $ } = Ember;

export default Service.extend({
  getProjects(runtime){
    /* is passed a runtime verb, eg - preprod
    *  makes call and grabs list of runtime projects
    *  reformats each project string as an object
    *  returns array of objects with each object containing project name/id
    */

    //let data = $.getJSON(`http://dash-${runtime}.azurewebsites.net/api/projects`);
    let data = $.getJSON(`http://${runtime}.azurewebsites.net/api/projects`);

    return data.then((json) => {

      let records = [];
      json.forEach(function(item){
        records.push( { id: item} );
      });

      this.set('data', records);
      return records;
    });
  },

  deleteProject(runtime, projectid, successCallback, failCallback){
    /* is passed runtime and a project's id
    *  performs a delete based on the params passed in
    *  returns response in form of a promise
    */

      let xhr = new XMLHttpRequest();
      xhr.open('DELETE', `http://${runtime}.azurewebsites.net/api/projects/${projectid}`, true);
      xhr.onload = () => {
        if (xhr.status === 200) {
          successCallback(xhr.responseText);
        } else {
          failCallback(xhr.responseText);
          //this code fine,, change service setup so that you can test
        }
      };
      xhr.send();
  }
});
