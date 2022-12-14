// 형변환 주의하기

'1' == 1; // true

String(11 + ' 문자와 결합'); // '11 문자와 결합'

Boolean(!!'문자열'); // true
Boolean(!!''); // false

// 10진수로 변환을 할때도 radix값을 넣어줘야 한다. default가 10이 아니기 때문.
parseInt('9.9999', 10); // 9

// 사용자가 형변환을 했을 때는 명시적인 변환
// JS가 형변환을 했을 때는 암묵적인 변환
