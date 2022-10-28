// 11. undefined & null

// JavaScript에서 undefined와 null은 난해하다.

!null; // true
!!null; // false

null === false; // false

!null === true; // true

// null은 수학적으로는 0으로 취급한다
null + 123; // 123

// undefined는 아무것도 지정하지 않았을 때 무언가의 기본값
// 선언했지만 값은 정의되지 않고 할당 X

let varb;

typeof varb; // 'undefined"

undefined + 10; // NaN

!undefined; // true

undefined == null; // true
undefined === null; // false
!undefined === !null; // true

// undefined와 null로 코드를 많이 작성하기 보다는 팀마다 컨벤션이 있으면 좋다.
// 스스로 컨벤션을 만들어 가기

// 정리
// undefined, null은 결국 값이 없거나 정의되지 않은 것.
// null은 값이 없다는 것을 명시적으로 표현한 것.
// undefined -> NaN, null -> 0
// typeof undefined -> undefined, typeof null -> object
// 사용할 때 조심하기
