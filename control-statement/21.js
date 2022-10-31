// 21. 삼항 연산자
// 3개의 피연산자를 취한다

// 조건 ? 참 : 거짓, 참과 거짓에는 식이 들어가야 한다.

// 삼항 연산자, if - else-if -else를 덕지덕지 쓰는 것 보다는 switch문을 고려하기

// 삼항 연산자에 삼항 연산자가 있을 때 괄호로 감싸서 가독성을 챙기기
const example = condition1 ? (a === 0 ? 'zero' : 'positive') : 'negative';

const welcomeMessage = (isLogin) => {
  const name = isLogin ? getName() : '이름없음';

  return `안녕하세요 ${name}`;
};

// best case
// 2가지 케이스로(참, 거짓) 나눠지는 경우에 사용하기 제일 좋다.

function alertMessage(isAdult) {
  const isAdult1 = isAdult ? 'adult' : 'not adult';
  return isAdult ? '입장이 가능합니다' : '입장이 불가능합니다';
}
