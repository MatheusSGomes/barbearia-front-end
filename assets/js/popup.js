const popup = document.querySelector('.popup');
const btnAgendar = document.querySelector('.btn-agendar');
const btnConfirmar = document.querySelector('.btn-popup-services');
const popupForm = document.querySelector('.popup-form');

function openPopup() {
  popup.style.display = 'flex';
}

function closePopup() {
  const btnClose = document.querySelector('.icon-close');
  popup.style.display = 'none';
}

btnAgendar.addEventListener('click', (e) => {
  e.preventDefault();
  openPopup();
});

btnConfirmar.addEventListener('click', (e) => {
  e.preventDefault();
  
  const iconSuccessful = document.querySelector('.popup-successful');
  iconSuccessful.style.display = 'block';

  const iconError = document.querySelector('.popup-error');
  iconError.style.display = 'block';

  popupForm.style.display = 'none';
})
