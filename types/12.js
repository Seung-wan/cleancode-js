// 12. eqeq 줄이기 (동등 연산자)

// type casting, 형변환이 일어난다.
'1' == 1; // true
1 == true; // true

'1' === 1; // false
1 === true; // false

// input에서 value를 가져올 때 자료형은 string이다.

// 느슨한 비교는 추천하지 않는다. 형변환을 해서 정석적으로 사용하기. 믿을 수 있는 코드.
// ESLint를 이용하면 좋다.
ticketNum.value == 0; // true
Number(ticketNum.value) === 0; // true
ticketNum.valueAsNumber === 0; // true
