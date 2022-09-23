import Cookie from './HandleCookies.js';

const url = 'http://127.0.0.1:8000/api/';
const id = 18;
const tbody = document.querySelector('.schedule-table-tbody');
const logoutBtn = document.querySelector('#logout');

window.onload = (event) => {
  if (Cookie.getCookie('token') == '') {
    window.stop();
    window.history.back();
  }  
};

// INDEX
axios
  .get(url+'agenda')
  .then(function (response) {

    if (response.data !== '') {
      response.data.forEach((user) => {
        const horario = user.horario.split('-');
        
        tbody.innerHTML += `
          <tr>
            <td>${user.nome}</td>
            <td>${horario[0]}</td>
            <td>${horario[1] + horario[2]}</td>
            <td>${user.corte == 1 ? 'Sim' : 'Não'}</td>
            <td>${user.barba == 1 ? 'Sim' : 'Não'}</td>
            <td>${user.sobrancelhas == 1 ? 'Sim' : 'Não'}</td>
            <td>${user.hidratacao == 1 ? 'Sim' : 'Não'}</td>
          </tr>
        `;
      });
    }
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error.message);
  });

// STORE
// axios
//   .post(url+'agenda', {
//     "nome": "Ricardo",
//     "email": "ricardo@email.com",
//     "whatsapp": "61 8989-7895",
//     "servicos": {
//         "corte": true,
//         "sobrancelhas": true,
//         "barba": true,
//         "hidratacao": true
//     },
//     "horario": "seg-15-16"  
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


// SHOW
// axios
//   .get(url+`agenda/${id}`)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
  
// UPDATE
// axios
//   .put(url+`agenda/${id}`, {
//     "nome": "João Fernando",
//     "email": "joao@email.com",
//     "whatsapp": "61 7777-7895",
//     "corte": true,
//     "sobrancelhas": true,
//     "barba": false,
//     "hidratacao": false,
//     "horario": "seg-16-17"  
//   })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// DESTROY
// axios
//   .delete(url+`agenda/${id}`)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


logoutBtn.addEventListener('click', function() {
  Cookie
    .setCookie('token', '');
  document.location.reload();
});