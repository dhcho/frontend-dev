const assert = require('assert').strict;
const { add } = require('./ex02');

try {
    assert.deepEqual(na(), [2, 4, 6], 'fail: deepEqual');
    assert.equal(na(), [2, 4, 6], 'fail: equal');
    console.log('ok');
} catch(err) {
    console.log(err.message);
}