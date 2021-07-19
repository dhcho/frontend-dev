const ex01 = require('../ex01.js');

describe('ex01', function(){
    this.timeout(3000);

    it('should run without error', function(){
        ex01('param-data', done);
    });
});