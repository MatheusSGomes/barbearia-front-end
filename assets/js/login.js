import Cookie from './HandleCookies.js';

// axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;

const config = {
  headers: {
    "authorization": Cookie.getCookie('token')
  }
};

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
