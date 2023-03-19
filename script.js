let formBox = document.querySelector('.form-box');
let btn = document.querySelector('.button-submit');
let btnReset = document.querySelector('.button-reset');
let inpName = document.querySelector('.name');
let inpSurName = document.querySelector('.surname');
let post = document.querySelector('.mail');
let pass = document.querySelector('.password');
let passTwo = document.querySelector('.password-two');
let date = document.querySelector('.date');
let inputBlocks = document.querySelectorAll('.input');

//проверка имени
inpName.addEventListener('input', function () {
  let inpAction = inpName.value.toLowerCase();
  if (/^[а-я]+$/.test(inpAction) && inpAction.length >= 2) {
    document.querySelector('.label-name').innerHTML = "";
    inpName.style.border = "2px solid #00cf00";
    inpName.dataset.flag = "true";
  } else {
    document.querySelector('.label-name').innerHTML = "должно состоять минимум из двух русских букв";
  }
  toSubmit();
});

//проверка фамилии
inpSurName.addEventListener('input', function () {
  let inpAction = inpSurName.value.toLowerCase();
  if (/^[а-я]+$/.test(inpAction) && inpAction.length >= 2) {
    document.querySelector('.label-surname').innerHTML = "";
    inpSurName.style.border = "2px solid #00cf00";
    inpSurName.dataset.flag = "true";
  } else {
    document.querySelector('.label-surname').innerHTML = "должна состоять минимум из двух русских букв";
  }
  toSubmit();
});

//проверка почты
post.addEventListener('input', function () {
  if (/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(post.value)) {
    document.querySelector('.label-mail').innerHTML = "";
    post.style.border = "2px solid #00cf00";
    post.dataset.flag = "true";
  } else {
    document.querySelector('.label-mail').innerHTML = "должен содержать английские буквы,знак @ и точку";
  }
  toSubmit();

});

//проверка пароля
pass.addEventListener('input', function () {
  if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(pass.value)) {
    document.querySelector('.label-pass').innerHTML = "";
    pass.style.border = "2px solid #00cf00";
    pass.dataset.flag = "true";
  } else {
    document.querySelector('.label-pass').innerHTML = "должен быть минимум из 8 английских букв символов, содержать одну цифру, одну заглавную и строчную буквы, и один спецсимвол";
  }
  toSubmit();
});

//подтверждение пароля
passTwo.addEventListener('input', function () {
  if (pass.value === passTwo.value) {
    document.querySelector('.label-passTwo').innerHTML = "";
    passTwo.style.border = "2px solid #00cf00";
    passTwo.dataset.flag = "true";
  } else {
    document.querySelector('.label-passTwo').innerHTML = "пароли не совпадают";
  }

  toSubmit();
});

//подтверждение даты
date.addEventListener('change', function () {
  let dateValue = date.value;
  let dataNum = Number(dateValue.split('').slice(0, 4).join(''));

  let now = new Date();
  console.log(now.getFullYear());

  let res = (now.getFullYear()) - dataNum;
  if (res >= 18) {
    date.style.border = "2px solid #00cf00";
    date.dataset.flag = "true";
    document.querySelector('.label-date').innerHTML = "";
  }
  else{
    document.querySelector('.label-date').innerHTML = "регистрация разрешена с 18 лет";
  }

  toSubmit();
});


btnReset.addEventListener('click', function (element) {
  element.preventDefault();
  inputBlocks.forEach(function (elem) {
    elem.style.border = "none";
    elem.value = "";
    elem.dataset.flag = "false";
  });
});

function toSubmit(){
  if (date.dataset.flag == "true" && passTwo.dataset.flag == "true" && post.dataset.flag == "true" && inpSurName.dataset.flag == "true" && inpName.dataset.flag == "true") {
    btn.disabled = false;
  }
}