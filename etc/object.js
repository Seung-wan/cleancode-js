// object의 key값은 string 혹은 symbol만 가능하다.
// 객체의 key값으로 객체를 사용했기 때문에 객체를 문자열로 변환한다.
// 그래서 객체가 '[object Object]'가 되었음.
// 따라서 똑같은 key에 value(100, 200)값이 덮어져서 답은 200

const obj = {};

const a = { a: 10 };
const b = { b: 20 };

obj[a] = 100;
obj[b] = 200;

console.log(obj);
