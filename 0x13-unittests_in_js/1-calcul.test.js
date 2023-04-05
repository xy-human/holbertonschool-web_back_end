const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', function () {
    it('Return the sum numbers', function () {
        assert.equal(calculateNumber('SUM', 3, 9), 12);
    });
    it('Return the subtract numbers', function () {
        assert.equal(calculateNumber('SUBTRACT', 3, 9), - 6);
    });
    it('Return the sum numbers', function () {
        assert.equal(calculateNumber('DIVIDE', 3, 0), 'Error');
    });
});
