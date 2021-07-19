const assert = require('assert');
const { add } = require('./ex02');

try {
    assert.equal(add(10, 20)/*actual*/, '30'/*expect*/);        // ==
    assert.strictEqual(add(10, 20)/*actual*/, '30'/*expect*/);  // ===
    console.log('ok');
} catch(err) {
    console.log('fail:', err.message);
}