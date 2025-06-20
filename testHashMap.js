import HashMap from './HashMap.js';

const test = HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

test.set('hat', 'grey'); 
test.set('kite', 'purple');
test.set('moon', 'silver');
/* test.set('ice cream', 'pink');
test.set('dog', 'golden');*/
console.log(test.entries());
console.log(test.length());
console.log(test.getCapacity());
/*
console.log(test.get('grape'));
console.log(test.has('carrot'));
console.log(test.values());
console.log(test.clear());
console.log(test.entries());*/