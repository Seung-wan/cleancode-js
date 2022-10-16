// 5. var를 지양하자

// 값은 다른데 변수명은 일치한다.
// 재할당, 재선언 다 가능하다.
var name = 'kim';
var name = 'kim';
var name = 'kim2';
var name = 'kim2';
name = 'kim3';

console.log(name); // kim3

// ---

// 호이스팅 발생
console.log(name2); // undefined

var name2 = 'yu';

// ---

// SyntaxError: Identifier 'name3' has already been declared
// 같은 식별자명으로 재선언을 할 수 없다.
let name3 = 'park';
let name3 = 'park';

// Assignment to constant variable.
// const는 초기화와 할당을 같이 해야한다. 재할당을 할 수 없다.
const name4 = 'lee';
name4 = 'test';
