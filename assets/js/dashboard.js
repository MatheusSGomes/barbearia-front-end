import Cookie from './HandleCookies.js';

// const API = "https://projeto-barbearia-api.herokuapp.com/api/";
// const URL = "https://matheussgomes.github.io/barbearia-front-end/";
const API = "http://127.0.0.1:8000/api/";
const URL = "http://127.0.0.1:5500/";

const tbody = document.querySelector('.schedule-table-tbody');
const logoutBtn = document.querySelector('#logout');
const formNewUser = document.querySelector('#form-new-user');
const errorMessages = document.querySelector('.error-messages');
const successMessages = document.querySelector('.success-messages');

window.onload = (event) => {
  if (Cookie.getCookie('token') == '') {
    window.stop();
    // document.location.href = "https://matheussgomes.github.io/barbearia-front-end/login.html";
    document.location.href = `${URL}login.html`;
  }  
};

// INDEX
axios
  .get(`${API}agenda`)
  .then(function (response) {

    if (response.data !== '') {
      response.data.forEach((user) => {
        const horario = user.horario.split('-');
        
        tbody.innerHTML += `
          <tr>
            <td>${user.nome}</td>
            <td>${horario[0]}</td>
            <td>Das ${horario[1]}h às ${horario[2]}h</td>
            <td>${user.corte == 1 ? 'Sim' : 'Não'}</td>
            <td>${user.barba == 1 ? 'Sim' : 'Não'}</td>
            <td>${user.sobrancelhas == 1 ? 'Sim' : 'Não'}</td>
            <td>${user.hidratacao == 1 ? 'Sim' : 'Não'}</td>
            <td>
              <button class="btn-sm btn-blue btn-editar" data-id="${user.id}">Editar</button>
              <button class="btn-sm btn-red btn-apagar" data-id="${user.id}">Apagar</button>
            </td>
          </tr>
        `;
      });
    }
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error.message);
  })
  .finally(function () {
    const buttonsApagar = document.querySelectorAll('.btn-apagar');
    const buttonsEditar = document.querySelectorAll('.btn-editar');

    buttonsApagar.forEach((button) => {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        apagarAgendamento(event.target.dataset.id);
      })
    })

    console.log(buttonsEditar);
    
  });;

function apagarAgendamento(id) {
  // DESTROY
  axios
    .delete(API+`agenda/${id}`)
    .then(function (response) {
      location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
}


formNewUser.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = event.explicitOriginalTarget.elements.namedItem('name').value;
  const email = event.explicitOriginalTarget.elements.namedItem('email').value;
  const password = event.explicitOriginalTarget.elements.namedItem('password').value;

// REGISTER
  axios
    .post(`${API}register`, {
      "name": name,
      "email": email,
      "password": password,
    })
    .then(function (response) {
      // console.log(response.data);
      // console.log(response);
      successMessages.style.display = "block";
      successMessages.innerHTML = response.data.message;
      formNewUser.reset();
    })
    .catch(function (error) {
      // console.log(error);
      errorMessages.style.display = "block";
      errorMessages.innerHTML = error.response.data.message;
      formNewUser.reset();
    });
})




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
