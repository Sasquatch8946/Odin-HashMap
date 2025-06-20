import HashSet from './HashSet.js';

const test = HashSet();
test.set('apple');
test.set('banana');
test.set('carrot');
test.set('carrot');
test.set('dog');
test.set('elephant');
test.set('frog');
test.set('grape');
test.set('hat');
test.set('ice cream');
test.set('jacket');
test.set('kite');
test.set('lion');
test.set('lion');
// the following triggers a resize
test.set('table cloth');
console.log(test.entries());
console.log(test.length());
console.log(test.getCapacity());

