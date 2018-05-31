const path = require('path');
const randomTestSelector = require('./index');

describe('randomTest suite', () => {

    beforeEach(() => {
        jest.spyOn(console, 'log');
    });

    afterEach(() => {
        console.log.mockRestore();
    });

   it('should be a function', () => {
       expect(typeof randomTestSelector).toEqual('function');
   });
   // it('should produce an array with 28 exercises in it', () => {
   //      const exercises = randomTestSelector();
   //      expect(randomTestSelector()).toHaveLength(28);
   // });
   it('should return one exercise', () => {
       const exercises = [ 'anagrams',
           'bst',
           'capitalize',
           'chunk',
           'circular',
           'events',
           'fib',
           'fizzbuzz',
           'fromlast',
           'levelwidth',
           'linkedlist',
           'matrix',
           'maxchar',
           'midpoint',
           'palindrome',
           'pyramid',
           'qfroms',
           'queue',
           'randomTest',
           'reverseint',
           'reversestring',
           'sorting',
           'stack',
           'steps',
           'tree',
           'validate',
           'vowels',
           'weave' ];

       expect(exercises).toContain(randomTestSelector());
   });
   it('should output the exercise via the console', () => {
       randomTestSelector();
       expect(console.log).toHaveBeenCalled();
   })
});