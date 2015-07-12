import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {name: "About Asserts", module: "Asserts", file: '0_intro-test.js'},
      {name: "About Ember Object", module: "Ember Object", file: '1_ember_object-test.js'},
    ];
  }
});
