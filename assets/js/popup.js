const popup = document.querySelector('.popup');

const btnAgendar = document.querySelector('.btn-agendar');

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