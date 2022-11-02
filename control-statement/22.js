// 22. truthy & falsy

// if문의 조건 자체가 boolean으로 귀결된다.
if ('string'.length > 0) {
}

if (!isNaN(10)) {
}

if (boolean) {
}

function printName(name) {
  // if (name === undefined || name === null) {
  //   return '사람이 없네요';
  // }
  if (!name) {
    return '사람이 없네요';
  }

  return '안녕하세요 ' + name + '님';
}

// 가장 중요한 것.
// boolean으로 평가되는 값을 true or false랑 비교하지 말것, 의미없는 행동이다.
