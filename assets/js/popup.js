const popup = document.querySelector('.popup');
const btnAgendar = document.querySelector('.btn-agendar');
const btnConfirmar = document.querySelector('.btn-popup-services');
const popupForm = document.querySelector('.popup-form');
const iconSuccessful = document.querySelector('.popup-successful');
const iconError = document.querySelector('.popup-error');

// const url = new URL(parent.location.href);
// console.log(url.searchParams.get('horario'));


// console.log(document.querySelectorAll('input[type=checkbox]#schedule'))
const inputsCheckbox = document.querySelectorAll('input[type=radio]#schedule');

inputsCheckbox.forEach(input => {
  console.log(input);
  console.log(input.checked);
  console.log(input.dataset.horario);
})


function openPopup() {
  popup.style.display = 'flex';
  iconSuccessful.style.display = 'none';
  iconError.style.display = 'none';
  popupForm.style.display = 'block';
  popupForm.reset();
}

function closePopup() {
  const btnClose = document.querySelector('.icon-close');
  popup.style.display = 'none';
  popupForm.reset();
}

btnAgendar.addEventListener('click', (e) => {
  e.preventDefault();
  openPopup();
});

btnConfirmar.addEventListener('click', (e) => {
  e.preventDefault();
  
  
  
  const inputNome = document.getElementsByName('nome')[0].value;
  const inputEmail = document.getElementsByName('email')[0].value;
  const inputWhatsapp = document.getElementsByName('whatsapp')[0].value;
  const inputCorte = document.getElementsByName('corte')[0].value;
  const inputSobrancelhas = document.getElementsByName('sobrancelhas')[0].value;
  const inputBarba = document.getElementsByName('barba')[0].value;
  const inputHidratacao = document.getElementsByName('hidratacao')[0].value;

  axios
    .post('http://127.0.0.1:8000/api/agenda', {
      "nome": inputNome,
      "email": inputEmail,
      "whatsapp": inputWhatsapp,
      "servicos": {
          "corte": inputCorte == 'on' ? 1 : 0,
          "sobrancelhas": inputSobrancelhas == 'on' ? 1 : 0,
          "barba": inputBarba == 'on' ? 1 : 0,
          "hidratacao": inputHidratacao == 'on' ? 1 : 0
      },
      "horario": "seg-15-16"  
    })
    .then(function (response) {
      iconSuccessful.style.display = 'block';
      popupForm.style.display = 'none';
      console.log(response);
    })
    .catch(function (error) {
      iconError.style.display = 'block';
      popupForm.style.display = 'none';
      console.log(error);
    });
})
