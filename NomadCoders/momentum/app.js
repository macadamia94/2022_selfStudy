const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');

function onLoginSubmit(e) {
    e.preventDefault();
    //const username = loginInput.value;
    console.log(e);
}

loginForm.addEventListener('submit', onLoginSubmit);
