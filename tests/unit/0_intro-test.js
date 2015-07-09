import { _ } from '../helpers/blank';
import { module, test } from 'qunit';

// Run `ember test --server` then visit:
// http://localhost:7357/tests/index.html?module=Intro&nojshint
// to run just this file.
module('Asserts');

test('Our First Test', function(assert) {
  assert.ok(false); // Should be true
});

test('Better Messages', function(assert) {
  assert.ok(false, 'Should be true: Please fix it');
});

test('Test Equality', function(assert) {
  const expectedValue = _;
  const actualValue = 1 + 1;
  assert.ok(actualValue === expectedValue);
});

test('Better way to Test Equality', function(assert) {
  const expectedValue = _;
  const actualValue = 1 + 1;
  assert.equal(actualValue, expectedValue);
});

test('You will need to fill in the blanks', function(assert) {
  assert.equal(1 + 1, _);
});
