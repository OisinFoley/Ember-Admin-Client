import Ember from 'ember';
const { Component } = Ember;

export default Component.extend({
  //Ember wraps components in divs, removing the next line mis-aligns html elements
  tagName: ''
  //classNames: ['btn btn-danger']
});
