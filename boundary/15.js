// 15. min - max

// 경계 다루기
// 1. 최소값과 최대값을 다룬다.
// 2. 최소값과 최대값 포함 여부를 결정해야 한다. (이상-초과 / 이하-미만)
// 3. 혹은 네이밍에 최소값과 최대값 포함 여부를 표현한다.

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const MAX_AGE = 20;

function isAdult(age) {
  // 최소값, 최대값 (포함되는지 vs 안되는지)
}
