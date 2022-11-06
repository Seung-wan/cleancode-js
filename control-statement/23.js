// 23. short-circuit evaluation(단축 평가)
// 확정이 나면, 그 값으로 사용한다.

console.log(true && true && '도달 O');

console.log(true && false && '도달 X');

console.log(false || false || '도달 O');

console.log(true || true || '도달 X');

function fetchData() {
  // if (state.data) {
  //   return state.data;
  // } else {
  //   return 'Fetching...';
  // }

  // return state.data ? state.data : 'Fetching...';
  return state.data || 'Fetching...'; // 상황에 따라 ||보다 ??가 유용할 수도 있다.
}

function favoriteDog(someDog) {
  // let favoriteDog;

  // if (someDog) {
  //   favoriteDog = dog;
  // } else {
  //   favoriteDog = '냐옹';
  // }

  // return favoriteDog + '입니다';

  return (someDog || '냐옹') + '입니다';
}

function getActiveUserName(user, isLogin) {
  // if (isLogin && user) {
  //   if (user.name) {
  //     return user.name;
  //   } else {
  //     return '이름없음';
  //   }
  // }

  if (isLogin && user) {
    return user.name || '이름없음';
  }
}

// 보이는 패턴들이 있다. 단축평가를 잘 사용하면 코드를 훨씬 가독성 좋게 작성할 수 있다.
