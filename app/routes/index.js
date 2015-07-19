import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {name: "About Asserts", module: "Koans | 0 | Asserts", file: '0_intro-test.js'},
      {name: "About Ember Object", module: "Koans | 1 | Ember Object", file: '1_ember_object-test.js'},
    ];
  }
});
