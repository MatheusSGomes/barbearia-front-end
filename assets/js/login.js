import Cookie from './HandleCookies.js';

// const URL = "https://matheussgomes.github.io/barbearia-front-end/";
// const API = "https://projeto-barbearia-api.herokuapp.com/api/";
const API = "http://127.0.0.1:8000/api/";
const URL = "http://127.0.0.1:5500/";

// axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
// axios.defaults.headers.common.Accept += 'Access-Control-Allow-Origin: *'

const btnLogin = document.querySelector('.btn-login');
const loadingElement = document.createElement('img');
loadingElement.setAttribute('src', './assets/icons/loading.svg');
loadingElement.setAttribute('width', '30px');

window.onload = (event) => {
  if (Cookie.getCookie('token')) {
    document.location.href = `${URL}dashboard.html`;
  }
}

const errorMessages = document.querySelector('.error-messages');

const config = {
  headers: {
    "authorization": Cookie.getCookie('token')
  }
};

const formLogin = document.querySelector('#form-login');
formLogin.addEventListener('submit', (event) => {
  event.preventDefault();

  btnLogin.innerHTML = '';
  btnLogin.appendChild(loadingElement);

  const email = event.explicitOriginalTarget.elements.namedItem('email').value;
  const password = event.explicitOriginalTarget.elements.namedItem('password').value;

  login(email, password);
});

function login(email, password) {
  axios
    .post(`${API}login`, {
      "email": email,
      "password": password,
    })
    .then(function (response) {
      Cookie
        .setCookie('token', response.headers.authorization, 7);
        window.location.href = `${URL}dashboard.html`;
    })
    .catch(function (error) {
      errorMessages.innerHTML = 'E-mail ou senha inválidos';
      errorMessages.style.display = 'block';

      btnLogin.removeChild(loadingElement);
      btnLogin.innerHTML = 'LOGIN';

      console.log(error.message);
    });
}

// LOGIN
// axios
//   .post('http://127.0.0.1:8000/api/login', {
//     "email": "ana@email.com",
//     "password": "12345678",
//   })
//   .then(function (response) {
//     Cookie
//       .setCookie('token', response.headers.authorization, 7);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


// REGISTER
// axios
//   .post('http://127.0.0.1:8000/api/register', {
//     "name": "admin",
//     "email": "admin@email.com",
//     "password": "12345678",
//   })
//   .then(function (response) {
//     console.log(response.data);
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


// INDEX - LISTAR USUÁRIOS
// axios
//   .get('http://127.0.0.1:8000/api/usuario', {
//     headers: {
//       "authorization": Cookie.getCookie('token')
//     }
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })

// SHOW - LISTAR UM USUÁRIO
// axios
//   .get('http://127.0.0.1:8000/api/usuario/4', { 
//     headers: {
//       "authorization": Cookie.getCookie('token')
//     }
//   })
//   .then(function (response) {
//     console.log(response.data)
//   })
//   .catch(function (error) {
//     console.log(error)
//   });

// UPDATE - ATUALIZAR UM USUÁRIO
// const data = {
//   "name": "Ana Maria",
//   "email": "ana-maria@email.com"
// };

// axios
//   .put('http://127.0.0.1:8000/api/usuario/4', data, config)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (response) {
//     console.log(response);
//   });


// DELETE - APAGAR UM USUÁRIO
// axios
//   .delete('http://127.0.0.1:8000/api/usuario/8', config)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
