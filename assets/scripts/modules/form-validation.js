import IMask from "imask";

function formValidation() {
  const nameInput = document.querySelector(".form__input-name");
  const mailInput = document.querySelector(".form__input-mail");
  const phoneInput = document.querySelector(".form__input-phone");
  const msgTextArea = document.querySelector(".form__textarea-msg");

  const phoneMask = new IMask(phoneInput, {
    mask: "+{375}(00)000-00-00",
  });
}

export default formValidation;
