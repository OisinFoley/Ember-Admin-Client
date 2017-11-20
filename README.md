# runtime-admin-app

An app for viewing a list of projects, opening an individual project, and deleting projects for a given runtime.
At present, there are 2 available runtimes to switch between("dash-preprod" and "dash-test").
The list to be displayed is determined by a button-click, which toggles a boolean value.
Going forward, it would be better to implement a dropdown list for specifying a runtime, and then using a switch to determine which list should be displayed back to the user.

Small issue:

- The button used for toggling between runtimes is not properly aligned with the list of projects. This is because the button is just outside a div which holds the list of projects. 
If the button is placed inside this div, then the top of the scrollbar will be placed at the top of the button, which we do not want.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd runtime-admin-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
