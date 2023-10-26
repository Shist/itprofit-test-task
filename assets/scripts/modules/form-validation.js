import IMask from "imask";

function formValidation() {
  const nameInput = document.querySelector(".form__input-name");
  const nameError = document.querySelector(".form__user-name-error");
  nameInput.addEventListener("change", () => {
    if (!nameInput.value.trim()) {
      nameInput.classList.add("error-input");
      nameError.classList.remove("hidden-element");
    } else {
      nameInput.classList.remove("error-input");
      nameError.classList.add("hidden-element");
    }
  });

  const mailInput = document.querySelector(".form__input-mail");
  const mailError = document.querySelector(".form__user-mail-error");
  mailInput.addEventListener("change", () => {
    if (!mailInput.value.trim()) {
      mailInput.classList.add("error-input");
      mailError.textContent = "Почта обязательна для заполнения";
      mailError.classList.remove("hidden-element");
    } else if (!/^\S+@\S+\.\S+$/.test(mailInput.value)) {
      mailInput.classList.add("error-input");
      mailError.textContent = "Почта указана некорректно";
      mailError.classList.remove("hidden-element");
    } else {
      mailInput.classList.remove("error-input");
      mailError.classList.add("hidden-element");
    }
  });

  const phoneInput = document.querySelector(".form__input-phone");
  const phoneError = document.querySelector(".form__user-phone-error");
  const phoneMask = new IMask(phoneInput, {
    mask: "+{375}(00)000-00-00",
  });
  phoneInput.addEventListener("change", () => {
    if (!phoneInput.value.trim()) {
      phoneInput.classList.add("error-input");
      phoneError.textContent = "Телефон обязателен для заполнения";
      phoneError.classList.remove("hidden-element");
    } else if (!phoneMask.masked.isComplete) {
      phoneInput.classList.add("error-input");
      phoneError.textContent = "Телефон не указан до конца";
      phoneError.classList.remove("hidden-element");
    } else {
      phoneInput.classList.remove("error-input");
      phoneError.classList.add("hidden-element");
    }
  });

  const msgTextArea = document.querySelector(".form__textarea-msg");
  const msgError = document.querySelector(".form__user-msg-error");
  msgTextArea.addEventListener("change", () => {
    if (!msgTextArea.value.trim()) {
      msgTextArea.classList.add("error-input");
      msgError.classList.remove("hidden-element");
    } else {
      msgTextArea.classList.remove("error-input");
      msgError.classList.add("hidden-element");
    }
  });
}

export default formValidation;
