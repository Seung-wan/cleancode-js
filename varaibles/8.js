// 8. 임시 변수 제거하기

function getElements() {
  const result = {}; // 임시 객체

  result.title = document.querySelector('.title');
  result.text = document.querySelector('.text');
  result.value = document.querySelector('.value');

  return result;
}

function getElements() {
  const result = {
    title: document.querySelector('.title'),
    text: document.querySelector('.text'),
    value: document.querySelector('.value'),
  };

  return result;
}

function getElements() {
  return {
    title: document.querySelector('.title'),
    text: document.querySelector('.text'),
    value: document.querySelector('.value'),
  };
}

// 추가적인 스펙, 기획으로 인해 변경이 생기면
// 1. 함수 추가
// 2. getDateTime 수정
function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.Hours();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;

  return {
    month,
    day,
    hour,
  };
}

function getDateTime(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const hour = targetDate.Hours();

  return {
    month: month >= 10 ? month : '0' + month,
    day: day >= 10 ? day : '0' + day,
    hour: hour >= 10 ? hour : '0' + hour,
  };
}

function getDateTimeAfterOneWeek() {
  const { month, day, hour } = getDateTime(new Date());

  // 원래라면 1주일 뒤를 계산할 수 있는 로직 필요
  // 현재는 로직 없이 틀만 작성
  return {
    month: month + '',
    day: day + '',
    hour: hour + '',
  };
}

// 함수는 하나의 일만 하도록 작성해야 계속 추상화를 해나갈 수 있다.
// 임시 변수를 줄여야 한다.

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max + 1) + min);

  return randomNumber;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1) + min);
}

/**
 * 임시 변수는 굉장히 안좋다, 제거해야 한다
 * 이유
 * 1. 명령형으로 가득한 로직
 * 2. 어디서 어떻게 잘못 되었는지 디버깅이 힘들다
 * 3. 추가적인 코드를 작성하고 싶은 유혹이 있다 -> 유지보수가 어려워짐
 *
 * 해결책
 * 1. 함수를 나누기
 * 2. 바로 반환
 * 3. 고차함수 (map, filter, reduce)
 * 4. 선언형 프로그래밍 -> React
 */
