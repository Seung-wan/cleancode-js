// 7. 전역 공간 사용 최소화

/**
 * 우리가 전역 공간 사용을 최소화 해야 한다고 듣게 되는 곳
 * 1. 경험
 * 2. 누군가 혹은 자바스크립트 생태계
 * 3. 강의 혹은 책
 * 4. 회사 혹은 멘토
 * 5. Lint
 */

// 전역 공간 -> 최상위 -> window(브라우저), global(NodeJS)

// 전역 공간에 접근하는 것은 좋은 것이 아니다.
// 규모있는 앱을 만들게 되면 느낄 수 있다.

// index.html 파일의 script태그에 a.js, b.js 파일 2개를 불러온다고 가정.

// js 파일들은 하나의 전역공간을 공유한다.
// a.js와 b.js는 다른 역할을 하려고 해도 전역 공간이 공유되어 문제를 초래할 수 있다.

// a.js
var globalVar = 'global';

console.log(globalVar); // global
console.log(window.globalVar); // browser에서 실행하면 global

// setTimeout 자체는 Web API이기 때문에 자바스크립트 코드에서는 에러를 뱉지 않는다.
var setTimeout = 'setTimeout';

function setTimeout() {
  console.log('func');
}

// b.js
console.log(globalVar); // global

setTimeout(() => {
  console.log('after 1sec');
}, 1000);

// 전역 공간 사용을 최소화하기 위한 방법
// 1. IIFE (Immediately Invoked Function Expression)
// 2. Module
// 3. Closure
// 4. const, let

/**
 * 전역 공간을 더럽히면 안된다
 * -> 어디서나 접근할 수 있기 때문에
 * 대안
 * 1. 전역변수 X
 * 2. 지역변수 O
 * 3. window, global을 조작X
 * 4. const, let 사용
 * 5. IIFE, Module, Closure -> 스코프를 나누는 방법
 */

/**
 * 개인적인 생각
 * 실제로 전역 공간을 사용하게 되는 경우는 많이 없는 것 같다
 * 현대 프론트엔드 개발에서는 var를 절대 사용하지 않고 프레임워크들이 기본적으로 모듈 방식으로 동작하기 때문
 *
 * 스코프를 항상 최대한 좁게 가져가는 것에는 신경을 쓰면 좋을 것 같다
 * 꼭 window, global과 같은 전역공간이 아니어도 큰 범위에 변수를 선언하게 되면 생명주기가 길어지기 때문에
 * 메모리에 오래 남아있게 된다
 *
 *
 */
