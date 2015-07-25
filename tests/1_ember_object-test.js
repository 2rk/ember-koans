import { _ } from './helpers/blank';
import Ember from 'ember';
import { module, test } from 'qunit';

let count = 0, Animal, beast, cat;
module('Koans | 1 | Ember Object', {
  beforeEach: function() {
    count = 0;
    Animal = Ember.Object.extend({
      type: 'critter',
      decription: Ember.computed('type', function() {
        count++;
        return `I am a ${this.get('type')}`;
      })
    });
    beast = Animal.create();
    cat = Animal.create({
      type: 'cat',
    });
  }
});

test('Ember Object is an object', function(assert) {
  assert.equal(typeof cat, _);
});

test('Type of Object.extend is class', function(assert) {
  assert.equal(Ember.typeOf(Animal), _);
});

test('Ember.Object.create makes an instance', function(assert) {
  assert.equal(Ember.typeOf(beast), _);
});

test('Type of Object.create is instance', function(assert) {
  assert.equal(Ember.typeOf(cat), _);
});

test('An instance will have class properties', function(assert) {
  assert.equal(beast.type, _);
  assert.equal(cat.type, _);
});

test('Using `get` will access a property', function(assert) {
  assert.equal(beast.get('type'), _);
  assert.equal(cat.get('type'), _);
});

test('A property of type Ember.computed, is an object', function(assert) {
  // Reading: http://emberjs.com/api/classes/Ember.computed.html
  assert.equal(typeof beast.decription, _);
});

test('Using `get` will access a computed property', function(assert) {
  assert.equal(beast.get('decription'), _);
  assert.equal(cat.get('decription'), _);
});

test('Using `set` will change property', function(assert) {
  cat.set('type', 'kitten');
  assert.equal(cat.get('type'), _);
});

test('Setting a property will update dependent computed properties', function(assert) {
  cat.set('type', 'kitten');
  assert.equal(cat.get('decription'), _);
});

test('Computed properties are cached', function(assert) {
  cat.get('decription');
  assert.equal(count, 1);
  cat.get('decription');
  assert.equal(count, _);
});

test('changing dependent property invalidates cache', function(assert) {
  cat.get('decription');
  assert.equal(count, 1);
  cat.set('type', 'kitten');
  cat.get('decription');
  assert.equal(count, _);
});

test('Computed properties only execute when asked for', function(assert) {
  cat.set('type', 'kitten');
  assert.equal(count, _, "Count == 0, because we havn't asked for it yet");
  cat.get('decription');
  assert.equal(count, _, "Now we have.");
});

test('Ember protects against forgetting to use `set`', function(assert) {
  cat.get('decription');
  assert.throws(() => {
    cat.type = 'kitten';
  });
  assert.equal(cat.get('type'), _);
});
