// 아래와 같은 else if문 사용하지 말 것.
// if문으로 처리할 수 있다.
const x = 1;

if (x >= 0) {
  console.log('x는 0보다 크거나 같다.');
} else if (x > 0) {
  console.log('x는 0보다 크다');
}

// else if -> if
// 아래 if는 else if문과 다르게 2가지 조건 모두 탄다.

if (x >= 0) {
  console.log('x는 0보다 크거나 같다.');
}

if (x > 0) {
  console.log('x는 0보다 크다');
}

// 복잡해진다면, switch문 고려
// lookup table도 로직에 따라서 좋을 것 같다.
