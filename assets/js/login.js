import Cookie from './HandleCookies.js';

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
//     "name": "Leandra",
//     "email": "leandra@email.com",
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
