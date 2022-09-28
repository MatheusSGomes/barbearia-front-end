const API = "https://projeto-barbearia-api.herokuapp.com/api/";
// const API = "http://127.0.0.1:8000/api/";

const popup = document.querySelector('.popup');
const btnAgendar = document.querySelector('.btn-agendar');
const btnConfirmar = document.querySelector('.btn-popup-services');
const popupForm = document.querySelector('.popup-form');
const iconSuccessful = document.querySelector('.popup-successful');
const iconError = document.querySelector('.popup-error');
const url = new URL(parent.location.href);
const inputsCheckbox = document.querySelectorAll('input[type=radio]#schedule');

function openPopup() {
  popup.style.display = 'flex';
  iconSuccessful.style.display = 'none';
  iconError.style.display = 'none';
  popupForm.style.display = 'block';
}

function closePopup() {
  const btnClose = document.querySelector('.icon-close');
  popup.style.display = 'none';
  popupForm.reset();
}

btnAgendar.addEventListener('click', (e) => {
  e.preventDefault();

  inputsCheckbox.forEach(input => {
    if (input.checked) {
      url.searchParams.append('horario', input.dataset.horario);
    }
  })

  openPopup();
});

btnConfirmar.addEventListener('click', (e) => {
  e.preventDefault();

  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', './assets/icons/loading.svg');
  imgElement.setAttribute('width', '40px');

  btnConfirmar.textContent = '';
  btnConfirmar.appendChild(imgElement); 
  
  const inputNome = document.getElementsByName('nome')[0].value;
  const inputEmail = document.getElementsByName('email')[0].value;
  const inputWhatsapp = document.getElementsByName('whatsapp')[0].value;

  const inputCorte = document.getElementsByName('corte')[0].checked;
  const inputSobrancelhas = document.getElementsByName('sobrancelhas')[0].checked;
  const inputBarba = document.getElementsByName('barba')[0].checked;
  const inputHidratacao = document.getElementsByName('hidratacao')[0].checked;

  axios
    .post(`${API}agenda`, {
      "nome": inputNome,
      "email": inputEmail,
      "whatsapp": inputWhatsapp,
      "servicos": {
          "corte": inputCorte === true ? 1 : 0,
          "sobrancelhas": inputSobrancelhas === true ? 1 : 0,
          "barba": inputBarba === true ? 1 : 0,
          "hidratacao": inputHidratacao === true ? 1 : 0
      },
      "horario": url.searchParams.get('horario')
    })
    .then(function (response) {
      iconSuccessful.style.display = 'block';
      popupForm.style.display = 'none';
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
})

