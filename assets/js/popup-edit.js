// const API = "https://projeto-barbearia-api.herokuapp.com/api/";
const API = "http://127.0.0.1:8000/api/";

const popup = document.querySelector('.popup');
const btnConfirmar = document.querySelector('.btn-popup-services');
const popupForm = document.querySelector('.popup-form');
const iconSuccessful = document.querySelector('.popup-successful');
const iconError = document.querySelector('.popup-error');
const btnClose = document.querySelector('.icon-close');

const nameInput = document.querySelector('#nameClient');
const emailInput = document.querySelector('#emailClient');
const whatsappInput = document.querySelector('#whatsappClient');

const corteInput = document.getElementsByName('corte')[0];
const sobrancelhasInput = document.getElementsByName('sobrancelhas')[0];
const barbaInput = document.getElementsByName('barba')[0];
const hidratacaoInput = document.getElementsByName('hidratacao')[0];

let id;

export function openPopup(event) {
  popup.style.display = 'flex';
  iconSuccessful.style.display = 'none';
  iconError.style.display = 'none';
  popupForm.style.display = 'block';

  id = event.target.dataset.id;
  // SHOW
  axios
    .get(API+`agenda/${id}`)
    .then(function (response) {
      nameInput.value = response.data.nome;
      emailInput.value = response.data.email;
      whatsappInput.value = response.data.whatsapp;

      corteInput.checked = response.data.corte == 1 ? true : false;
      sobrancelhasInput.checked = response.data.sobrancelhas == 1 ? true : false;
      barbaInput.checked = response.data.barba == 1 ? true : false;
      hidratacaoInput.checked = response.data.hidratacao == 1 ? true : false;

      // horario.value = response.data.horario;
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

export function closePopup() {
  popup.style.display = 'none';
  popupForm.reset();
}

btnConfirmar.addEventListener('click', (e) => {
  e.preventDefault();

  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', './assets/icons/loading.svg');
  imgElement.setAttribute('width', '40px');

  btnConfirmar.textContent = '';
  btnConfirmar.appendChild(imgElement); 
  
  const inputNome = document.getElementsByName('nomeCliente')[0].value;
  const inputEmail = document.getElementsByName('emailCliente')[0].value;
  const inputWhatsapp = document.getElementsByName('whatsappCliente')[0].value;

  const inputCorte = document.getElementsByName('corte')[0].checked;
  const inputSobrancelhas = document.getElementsByName('sobrancelhas')[0].checked;
  const inputBarba = document.getElementsByName('barba')[0].checked;
  const inputHidratacao = document.getElementsByName('hidratacao')[0].checked;

  // console.log(inputNome, inputEmail, inputWhatsapp, inputCorte);

  // UPDATE
  axios
    .put(API+`agenda/${id}`, {
      "nome": inputNome,
      "email": inputEmail,
      "whatsapp": inputWhatsapp,
      "corte": inputCorte,
      "sobrancelhas": inputSobrancelhas,
      "barba": inputBarba,
      "hidratacao": inputHidratacao,
      "horario": "sex-16-17" 
    })
    .then(function (response) {
      iconSuccessful.style.display = 'block';
      popupForm.style.display = 'none';
      location.reload();
      console.log(response);
    })
    .catch(function (error) {
      iconError.style.display = 'block';
      popupForm.style.display = 'none';

      btnConfirmar.textContent = 'CONFIRMAR';
      btnConfirmar.removeChild(imgElement); 

      console.log(error);
    }).finally(() => {
      setTimeout(() => closePopup(), 7000);
    });
});

btnClose.addEventListener('click', () => {
  closePopup();
});

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