var contactsButton = document.querySelector('.contacts__button');
var modal = document.querySelector('.modal__window');
var modalOverlay = document.querySelector('.modal__overlay');
var modalClose = modal.querySelector('.modal__close');
var clientName = modal.querySelector('[name=name]');
var clientEmail = modal.querySelector('[name=email');
var clientMessage = modal.querySelector('[name=text]');
var feedbackForm = modal.querySelector('.feedback__form');

contactsButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal__window--show');
  modalOverlay.classList.remove('modal__overlay--close');
  clientName.focus();
});

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal__window--show');
  modal.classList.remove('modal__window--error');
  modalOverlay.classList.add('modal__overlay--close');
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!clientName.value || !clientEmail.value || !clientMessage.value) {
    evt.preventDefault();
    modal.classList.remove('modal__window--error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add('modal__window--error');
    console.log('Не все поля заполнены');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal__window--show')) {
      modal.classList.remove('modal__window--show');
      modal.classList.remove("modal__window--error");
      modalOverlay.classList.add('modal__overlay--close');
    }
  }
})
