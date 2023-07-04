/* const form = document.querySelector('.js_form'),
    input = form.querySelector('input'),
    hello = document.querySelector('.js_hello');
const resetNameBtn = document.querySelector('.js_resetName');
    const User_LS = 'currentuserName',
    Show_CN = 'show';

function saveUN(text){
    localStorage.setItem(User_LS,text);
}

function submitHandler(event){
    event.preventDefault();
    const inputValue = input.value;
    showHello(inputValue);
    form.classList.add('hidden');
}

function showHello(text) {
    hello.innerText = `Приветствую ${text}!`;
    hello.classList.add(Show_CN);
    form.style.display = 'none';
    resetNameBtn.classList.remove('hidden');
    saveUN(text);
}

function askForUN() {
    form.classList.add(Show_CN);
    form.addEventListener('submit', submitHandler);
}

function resetName() {
    localStorage.removeItem(User_LS);
    hello.innerText = '';
    hello.classList.remove(Show_CN);
    form.classList.add(Show_CN);
    resetNameBtn.classList.add('hidden');
    input.value = '';
    form.addEventListener('submit', submitHandler);
  }

function loadUserName() {
    const currentuserName = localStorage.getItem(User_LS);
    if (currentuserName === null) {
      form.classList.add(Show_CN);
      form.addEventListener('submit', submitHandler);
    } else {
      showHello(currentuserName);
      resetNameBtn.classList.remove('hidden');
      resetNameBtn.addEventListener('click', resetName);
    }
}

function init() {
    loadUserName();

}

init(); *//*  Первая версия кода работала не очень корректно */ 

const form = document.querySelector('.js_form');
const input = form.querySelector('input');
const hello = document.querySelector('.js_hello');
const resetNameBtn = document.querySelector('.js_resetName');
const User_LS = 'currentuserName';
const Show_CN = 'show';

function saveUN(text) {
  localStorage.setItem(User_LS, text);
}

function submitHandler(event) {
  event.preventDefault();
  const inputValue = input.value;
  showHello(inputValue);
  form.style.display = 'none'; // Скрываем форму после сохранения имени
}

function showHello(text) {
  hello.innerText = `Приветствую ${text}!`;
  hello.classList.add(Show_CN);
  resetNameBtn.classList.remove('hidden');
  saveUN(text);
}

function askForUN() {
  form.style.display = 'block'; // Показываем форму
  form.addEventListener('submit', submitHandler);
}

function resetName() {
  localStorage.removeItem(User_LS);
  hello.innerText = '';
  hello.classList.remove(Show_CN);
  resetNameBtn.classList.add('hidden');
  input.value = '';
  form.style.display = 'block'; // Показываем форму после сброса имени
}

function loadUserName() {
  const currentuserName = localStorage.getItem(User_LS);
  if (currentuserName === null) {
    askForUN();
  } else {
    showHello(currentuserName);
    resetNameBtn.classList.remove('hidden');
    form.style.display = 'none'; // Скрываем форму, если имя уже сохранено
  }
}

function init() {
  loadUserName();
  resetNameBtn.addEventListener('click', resetName); // Добавляем слушатель события для кнопки сброса имени
}

init(); /* Вторая отработанная */