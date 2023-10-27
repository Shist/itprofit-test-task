"use strict";

import IMask from "imask";

function formValidation() {
  const btnConfirm = document.querySelector(".form__submit-btn");
  let nameIsOk = false;
  let mailIsOk = false;
  let phoneIsOk = false;
  let msgIsOk = false;

  function checkForm() {
    if (nameIsOk && mailIsOk && phoneIsOk && msgIsOk) {
      btnConfirm.disabled = false;
    } else {
      btnConfirm.disabled = true;
    }
  }

  const nameInput = document.querySelector(".form__input-name");
  const nameError = document.querySelector(".form__user-name-error");
  nameInput.addEventListener("input", () => {
    if (!nameInput.value.trim()) {
      nameIsOk = false;
      nameInput.classList.add("error-input");
      nameError.classList.remove("hidden-element");
    } else {
      nameIsOk = true;
      nameInput.classList.remove("error-input");
      nameError.classList.add("hidden-element");
    }
    checkForm();
  });

  const mailInput = document.querySelector(".form__input-mail");
  const mailError = document.querySelector(".form__user-mail-error");
  mailInput.addEventListener("input", () => {
    if (!mailInput.value.trim()) {
      mailIsOk = false;
      mailInput.classList.add("error-input");
      mailError.textContent = "Почта обязательна для заполнения";
      mailError.classList.remove("hidden-element");
    } else if (!/^\S+@\S+\.\S+$/.test(mailInput.value)) {
      mailIsOk = false;
      mailInput.classList.add("error-input");
      mailError.textContent = "Почта указана некорректно";
      mailError.classList.remove("hidden-element");
    } else {
      mailIsOk = true;
      mailInput.classList.remove("error-input");
      mailError.classList.add("hidden-element");
    }
    checkForm();
  });

  const phoneInput = document.querySelector(".form__input-phone");
  const phoneError = document.querySelector(".form__user-phone-error");
  const phoneMask = new IMask(phoneInput, {
    mask: "+{375}(00)000-00-00",
  });
  phoneInput.addEventListener("input", () => {
    if (!phoneInput.value.trim()) {
      phoneIsOk = false;
      phoneInput.classList.add("error-input");
      phoneError.textContent = "Телефон обязателен для заполнения";
      phoneError.classList.remove("hidden-element");
    } else if (!phoneMask.masked.isComplete) {
      phoneIsOk = false;
      phoneInput.classList.add("error-input");
      phoneError.textContent = "Телефон не указан до конца";
      phoneError.classList.remove("hidden-element");
    } else {
      phoneIsOk = true;
      phoneInput.classList.remove("error-input");
      phoneError.classList.add("hidden-element");
    }
    checkForm();
  });

  const msgTextArea = document.querySelector(".form__textarea-msg");
  const msgError = document.querySelector(".form__user-msg-error");
  msgTextArea.addEventListener("input", () => {
    if (!msgTextArea.value.trim()) {
      msgIsOk = false;
      msgTextArea.classList.add("error-input");
      msgError.classList.remove("hidden-element");
    } else {
      msgIsOk = true;
      msgTextArea.classList.remove("error-input");
      msgError.classList.add("hidden-element");
    }
    checkForm();
  });
}

export default formValidation;
