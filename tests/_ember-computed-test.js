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

skip('computed.and will logical `and` properties', function(assert) {
  const trooper = Ember.Object.extend({
    first: true,
    second: false,
    conOne: Ember.computed.and('first', 'second')
  }).create();
  assert.equal(trooper.get('conOne'), _, 'false and true');
  trooper.set('second', true);
  assert.equal(trooper.get('conOne'), _, 'true and true');
  trooper.set('second', 'FINE!');
  assert.equal(trooper.get('conOne'), _, 'Not just for booleans');
});

/*
any bool collect defaultTo deprecatingAlias empty equal filter filterBy filterProperty gt gte intersect lt lte map mapBy mapProperty match max min none not notEmpty or readOnly reads setDiff sort sum union uniq
*/
