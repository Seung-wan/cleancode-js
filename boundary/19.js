// 19. 매개변수의 순서가 경계다.
// 호출하는 함수의 네이밍과 인자의 순서의 연관성을 고려한다.

// 1. 매개변수를 2개가 넘지 않도록 만든다.
// 2. arguments, rest parameter
// 3. 매개변수를 객체에 담아서 넘긴다.
// 4. 랩핑하는 함수

function someFunc(someArg, someArg) {}

// 함수의 매개변수 만으로도 의미가 드러나기 때문에 매개변수는 2개를 넘지 않는것이 좋다.
genRandomNumber(1, 50);
getDates('2021-10-01', '2021-10-31');
genShuffleArray(1, 5);

// 매개변수가 많아야 한다면 객체를 이용해서 받거나 나머지 매개변수, arguments를 사용한다.

function someFunc(someArg1, someArg2, someArg3, someArg4) {}

function getFunc(someArg1, someArg3) {
  someFunc(someArg1, undefined, someArg3);
}
