// 10. 타입 검사

// typeof는 피연산자를 평가해서 문자열로 변환한다.
//  typeof null -> object

// 타입을 검사할 때 모든 게 typeof로 커버되지 않는다.
//  PRIMITIVE vs REFERENCE

// function, class -> function
// null -> object

// instanceof 연산자를 이용해서 객체의 프로토타입 체인을 검사한다.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const yu = new Person('yu', 26);

console.log(yu instanceof Person); // true

const arr = [];
const func = function () {};
const date = new Date();

console.log(arr instanceof Array); // true
console.log(func instanceof Function); // true
console.log(date instanceof Date); // true

// 프로토타입 체인을 타기 때문에, 결국 레퍼런스 타입의 최상위 객체는 object이기 때문에.
console.log(arr instanceof Object); // true
console.log(func instanceof Object); // true
console.log(date instanceof Object); // true

console.log(Object.prototype.toString.call([])); // [object Array]
console.log(Object.prototype.toString.call({})); // [object Object]
console.log(Object.prototype.toString.call(null)); // [object Null]

console.log(Object.prototype.toString.call(arr)); // [object Array]
console.log(Object.prototype.toString.call(func)); // [object Function]
console.log(Object.prototype.toString.call(date)); // [object Date]

// JavaScript 에서는 타입을 체크하기 어렵다, 본인만의 노하우 필요.

// 아래와 같은 키워드로 검색하면 판별하는 법이 잘 나온다.
// javascript is string, javascript is array, javascript is object.

// 동적인 타입 -> 타입검사 어려움 -> 잘 찾아서 해야한다. -> 어느 정도는 외워도 좋다.
//  primitive vs reference
//  typeof       instance
