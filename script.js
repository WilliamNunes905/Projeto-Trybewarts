const loginBtn = document.getElementById('login-btn');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const counter = document.getElementById('counter');

function loginAlert() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginBtn.addEventListener('click', loginAlert);

function ableSubmitBtn() {
  if (agreement.value === 'on') {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

agreement.addEventListener('click', ableSubmitBtn);

const textarea = document.querySelector('#textarea');

textarea.addEventListener('input', ({ currentTarget: target }) => {
  const maxLength = target.getAttribute('maxlength');
  const currentLength = target.value.length;

  counter.innerHTML = `${maxLength - currentLength} `;
});
