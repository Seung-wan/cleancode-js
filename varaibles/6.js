// var는 function level scope를 가진다.
// 전역 공간이 오염이 된다.

var global = '전역';

if (global === '전역') {
  var global = '지역';

  console.log(global); // 지역
}

console.log(global); // 지역

// ---

// let은 block level scope이기 때문에 전역 공간과 블록 공간이 구분이 된다.
let global2 = '전역';

if (global2 === '전역') {
  let global2 = '지역';

  console.log(global2); // 지역
}

console.log(global2); // 전역

// ---

// const는 재할당만 금지된 것이다.
// 레퍼런스 타입은 변경이 가능하다.
const person = {
  name: 'yu',
  age: 26,
};

person.name = 'kim';
person.age = 22;

console.log(person); // { name: 'kim', age: 22}

const person2 = [
  {
    name: 'yu',
    age: 26,
  },
];

person2.push({ name: 'kim', age: 22 });

console.log(person2); // [ {name: 'yu', age: 26 }, {name: 'kim', age: 22 } ]
