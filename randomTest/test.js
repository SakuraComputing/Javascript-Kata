const path = require('path');
const randomTestSelector = require('./index');

describe('randomTest suite', () => {
   it('should be a function', () => {
       expect(typeof randomTestSelector).toEqual('function');
   });
   it('should produce an array with 28 elements in it', () => {
        expect(randomTestSelector()).toHaveLength(28);
   });
   // it('should return one test at random', () => {
   //
   // });
});