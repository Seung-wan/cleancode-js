// 9. 호이스팅 주의하기

var global = 0;

function outer() {
  /**
   *  아래와 같다.
   *  var global;
   *  console.log(global);
   *  global = 5;
   */

  console.log(global);
  var global = 5;

  function inner() {
    var global = 10;

    console.log(global);
  }

  inner();

  global = 1;

  console.log(global);
}

outer();

// 함수도 호이스팅이 된다
var sum;

console.log(sum()); // 10

function sum() {
  return 1 + 2;
}
function sum() {
  return 1 + 2 + 3;
}
function sum() {
  return 1 + 2 + 3 + 4;
}

// 이러한 문제 때문에 함수도 const를 사용하여 작성하는 것을 권장

const sum = function () {
  return 1 + 2;
};

console.log(sum());

/**
 * 호이스팅: 런타임시 -> 선언이 최상단으로 끌어올려짐. 자바스크립트 엔진이 평가 과정을 먼저 거치기 때문에
 * 호이스팅 때문에 코드를 작성했을 때 예측한 결과가 틀려진다.
 *
 * 해결
 * 1. var X -> let, const 지향
 * 2. 함수 선언식을 조심하고 함수 표현식 사용
 */

// 이 부분들도 현대적으로, 또한 합리적으로 코드를 작성한다면 크게 문제가 될 것 같지는 않다.
