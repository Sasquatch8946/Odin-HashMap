import HashSet from './HashSet.js';

const test = HashSet();
test.add('apple');
test.add('banana');
test.add('carrot');
test.add('carrot');
test.add('dog');
test.add('elephant');
test.add('frog');
test.add('grape');
test.add('hat');
test.add('ice cream');
test.add('jacket');
test.add('kite');
test.add('lion');
test.add('lion');
// the following triggers a resize
test.add('table cloth');
test.remove('dog');
console.log(test.entries());
console.log(test.length());
console.log(test.getCapacity());

