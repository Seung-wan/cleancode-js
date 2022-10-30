// 20. 값식문

// 프로그래밍에서는 문법을 지키는 것이 매우 중요하다.

// 값과 식, 문이 어디에 쓰이는지 구분할 수 있어야 한다.
// React에서 고차 함수를 왜 사용해야 하는지 생각해보기.

// This JSX:
ReactDOM.render(<div id="msg">Hello World!</div>, mountNode);

// Is transformed to this JS:
ReactDOM.render(
  React.createELement('div', { id: 'msg' }, 'Hello World'),
  mountNode
);
