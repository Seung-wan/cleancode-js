// 24. else if 피하기

// 아래와 같은 else if문 사용하지 말 것.
// if문으로 처리할 수 있다.
const x = 1;

if (x >= 0) {
  console.log('x는 0보다 크거나 같다.');
} else if (x > 0) {
  console.log('x는 0보다 크다');
}

// 위의 else if는 아래의 문장과 같다.
if (x >= 0) {
  console.log('x는 0보다 크거나 같다.');
} else {
  if (x > 0) {
    console.log('x는 0보다 크다');
  }
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

// key로 떨어지지 않는 범위 조건의 경우에는 lookup table로 작성하기엔 조금 불편한 것 같다.
