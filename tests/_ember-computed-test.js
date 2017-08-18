import { _ } from './helpers/blank';
import Ember from 'ember';
import { module, test, skip } from 'qunit';

module('Koans | ? | Ember Computed', {});

const Person = Ember.Object.extend({
  name: 'My Name',
  nick: Ember.computed.oneWay('name')
});

skip('computed.alias is an alias', function(assert) {
  const thing = Person.create();

  assert.equal(thing.get('nick'), _, "nick is the same as name");
  thing.set('nick', 'Other Name');
  assert.equal(thing.get('name'), _);
  thing.set('name', 'Third Name');
  assert.equal(thing.get('nick'), _, 'changes flow both ways');
});

skip('computed.oneWay is a read-only alias', function(assert) {
  const thing = Person.create();

  assert.equal(thing.get('nick'), _);
  thing.set('nick', 'Other Name');
  assert.equal(thing.get('name'), _, 'name has not picked up nick change');
  assert.equal(thing.get('nick'), _, 'nick does hold onto new value');
  thing.set('name', 'Third Name');
  assert.equal(thing.get('nick'), _, 'even when name changes');
  // This makes `oneWay` a good method for dynamic default values
});

const FireFighter = Ember.Object.extend({
  name: "Super",
  brave: true,
  command: false,
  allProps: Ember.computed.and('brave', 'command'),
  anyProps: Ember.computed.or('brave', 'command')
});

skip('computed.and will logical `and` properties', function(assert) {
  const fireFighter = FireFighter.create();
  assert.equal(fireFighter.get('allProps'), _, 'false and true');
  fireFighter.set('command', true);
  assert.equal(fireFighter.get('allProps'), _, 'true and true');
  fireFighter.set('command', 'FIRE!');
  assert.equal(fireFighter.get('allProps'), _, 'will return the last truthy value');
  fireFighter.set('command', 0);
  assert.equal(fireFighter.get('allProp'), _, 'will return false if any are falsey');
});

// computed.any is deprecated in favour of computed.or Removed in 2.0

/*
 collect defaultTo deprecatingAlias empty equal filter filterBy filterProperty gt gte intersect lt lte map mapBy mapProperty match max min none not notEmpty
*/

skip('computed.bool converts truthy and falsey values to `true` and `false`', function(assert) {
  const fireFighter = FireFighter.extend({
    hasName: Ember.computed.bool('name'),
    tools: [],
    hasTools: Ember.computed.bool('tools.length')
  }).create();

  assert.equal(fireFighter.get('hasName'), _, "Strings are truthy");
  assert.equal(fireFighter.get('hasTools'), _, "zero is falsy");

  fireFighter.set('tools', ["hose", "ladder"]);
  assert.equal(fireFighter.get('hasTools'), _, "other numbers are truthy");
});

test('', function() {

});

skip('computed.or will logical `or` properties', function(assert) {
  const fireFighter = FireFighter.create();
  assert.equal(fireFighter.get('anyProps'), _, 'true or false');
  // Truthy and falsey values behave as `computed.and`
  fireFighter.set('first', false);
  assert.equal(fireFighter.get('anyProps'), _, 'false or false');
});

/*
readOnly reads setDiff sort sum union uniq
*/
