"use strict"; //Современный режим, для перевода VAR на LET
// var - утсаревший вид задания переменной, let - новый используемый в CS-6
let a = 15;
console.log(a);

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
a: 50

};

obj.a=10;

console.log(obj.a);

console.log(name);
var name = 'Vyacheslav';

{
    var result = 50;
}
console.log(result);

alert(5);
[].push('a');

function strict() {
    // Function-level strict mode syntax
    'use strict';
    function nested() { return 'And so am I!'; }
    return "Hi!  I'm a strict mode function!  " + nested();
  }
  function notStrict() { return "I'm not strict."; }


  // ПРОСТЫЕ ОБЪЕКТЫ
  let numbers = 444.444;
  console.log('string'*numbers);


  const perone = 'Slava';
  const bool = true;
  
  console.log(something);

  let und;
  console.log(und);

  // СПЕЦ. ОБЪЕКТЫ или КОМПЛЕКСНЫЕ ТИПЫ ДАННЫХ
  const object = {
    name: 'Vyacheslav',
    age: '30',
    job: 'PepsiCo',
    isMarried: 'true'
      };
      
      console.log(object.name);

    let arr = ['plum.png', 'apple.png'];
    console.log(arr[1]);
