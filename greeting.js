const form = document.querySelector(".js-form"),
  // html 자체를 document로 받아들임
  // 고로 html 중 js-form이라는 이름의
  // 태그, 클래스, id를 찾아서
  // form이라는 변수로 지정함. => 부모로 지정
  input = form.querySelector("input"),
  // input이라는 변수를 form이라는 부모에서 input이라는
  // 태그, 클래스, id를 찾아서
  // input이라는 변수로 저장한다.
  greeting = document.querySelector(".js-greetings");
// 동일

const USER_LS = "currentUser",
  // USER_LS의 키 값을 currentUser로 설장
  SHOWING_CN = "showing"; //

function saveName(text) {
  // text라는 문자를 name으로 저장
  localStorage.setItem(USER_LS, text);
  // loclastorage에 setitem을 실행한다.
  // USER_LS = TEXT이다.
}

function handleSubmit(event) {
  // 확인 설정(이벤트가 변수)
  event.preventDefault();
  // 이벤트 실행을 막고 디폴트
  const currentValue = input.value;
  // 현재 값은 input.value로 설정
  // input의 값은 html에서 form을 통해 받음
  paintGreeting(currentValue);
  // paintGreeting 실행
  saveName(currentValue);
  // saveName 실행
}

function askForName() {
  // 이름 묻기
  form.classList.add(SHOWING_CN);
  // classList에 SHOWING_CH를 추가
  // display : block;
  form.addEventListener("submit", handleSubmit); //
}

function paintGreeting(text) {
  // Greeting 바로 시작
  form.classList.remove(SHOWING_CN);
  // SHOWING_CN을 삭제 => Form칸 없앰
  greeting.classList.add(SHOWING_CN);
  // SHOWING_CN이라는 키의 값을 greeting이라는 클래스에 추가
  // 이 말은 SHOWING_CN의 값인 showing을 greeting이라는 클래스 추가
  // 그래서 css에 해당 클래스를 꺼냄
  // showing이라는 클래스 => display : block이므로
  // 바로 가본 값인 diplay : none로 안 보였다가
  // 해당 값이 들어가면 다시 보임
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();

/*
html에서 사용하고자 하는 클래스를 js에서 찾고 그 클래스에 클래스를 더 하는 행위로
값을 동적으로 바꿀 수 있는 이유는 인터프리터 언어이기 떄문이다.
greeting, form{
    display : none;
    display : block;
    display : none;
    display : block;
    display : none;
    display : block;
}
이렇게 연속적으로 바꾸더라도, 마지막 값이 설정되기 때문에 => 인터프리터
값의 변경이 유의미하다.
*/
