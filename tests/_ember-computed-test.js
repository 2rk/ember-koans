import { _ } from './helpers/blank';
import Ember from 'ember';
import { module, test, skip } from 'qunit';

let count = 0, Animal, beast, cat;
module('Koans | ? | Ember Computed', {});

skip('computed.alias is an alias', function(assert) {
  const thing = Ember.Object.create({
    name: 'My Name',
    nick: Ember.computed.alias('name')
  });

  assert.equal(thing.get('nick'), _, "nick is the same as name");
  thing.set('nick', 'Other Name');
  assert.equal(thing.get('name'), _);
  thing.set('name', 'Third Name');
  assert.equal(thing.get('nick'), _, 'changes flow both ways');
});

skip('computed.oneWay is a read-only alias', function(assert) {
  const thing = Ember.Object.create({
    name: 'My Name',
    nick: Ember.computed.oneWay('name')
  });

  assert.equal(thing.get('nick'), _);
  thing.set('nick', 'Other Name');
  assert.equal(thing.get('name'), _, 'name has not picked up nick change');
  assert.equal(thing.get('nick'), _, 'nick does hold onto new value');
  thing.set('name', 'Third Name');
  assert.equal(thing.get('nick'), _, 'even when name changes');
  // This makes `oneWay` a good method for dynamic default values
});

/*
and any bool collect defaultTo deprecatingAlias empty equal filter filterBy filterProperty gt gte intersect lt lte map mapBy mapProperty match max min none not notEmpty or readOnly reads setDiff sort sum union uniq
*/
