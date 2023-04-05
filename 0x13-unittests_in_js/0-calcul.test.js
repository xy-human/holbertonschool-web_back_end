const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
  it('Round the result of a + b numbers', () => {
    assert.equal(calculateNumber(3.9, 5.6), 10);
    assert.equal(calculateNumber(1.7, 0), 2);
    assert.equal(calculateNumber(1.3, 0), 1);
  });
  it('Show the result of a + b negative numbers', () => {
    assert.equal(calculateNumber(-7, 3), -4);
  });
  it('Show the result of a + b negative numbers', () => {
    assert.equal(calculateNumber(-7, -3), -10);
  });
  it('Show the result of a + b numbers, when the b is decimal', () => {
    assert.equal(calculateNumber(5, 0.0), 5);
  });
  it('Without arguments', () => {
    //assert(isNaN(calculateNumber(0),), 'no have a number');
    //assert(isNaN(calculateNumber(0,)));
    //assert(isNaN(calculateNumber()));
  });
  it('Processing with number zero', () => {
    assert.equal(calculateNumber(0, 0), 0);
    assert.equal(calculateNumber(0.0, 0), 0);
  });
  it('Tetsting for two integers numbers', () => {
    assert.equal(calculateNumber(0, 0), 0);
    assert.equal(calculateNumber(0.0, 0), 0);
    assert.equal(calculateNumber(0, 1.0), 1);
    assert.equal(calculateNumber(0, 1.3), 1);
    assert.equal(calculateNumber(0, 1.7), 2);
  });
  it('Testing throw error', () => {
    assert.throws(() => calculateNumber(NaN, 5), 'The argument not is a number');
  });
  it('it should return the right number', () => {
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(0, 1.2), 1);
    assert.equal(calculateNumber(1.3, 1.3), 2);
    assert.equal(calculateNumber(1.7, 1.2), 3);
    assert.equal(calculateNumber(1.3, 1.8), 3);
    assert.equal(calculateNumber(1.6, 1.8), 4);
  });
});
