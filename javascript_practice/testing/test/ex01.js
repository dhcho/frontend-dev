const assert = require('assert');
const { hello } = require('../ex01');

describe('hello()', function(){
    it('"Hello World" 문자열을 반환해야 함', function(){
        assert.strictEqual(hello(), "Hello World");
    });
});