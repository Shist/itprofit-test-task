"use strict";

import { postData } from "../services/services.js";

function formSending(url) {
  const form = document.querySelector(".main__user-form");
  const infoMsg = document.querySelector(".form__sending-info-msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    infoMsg.classList.add("hidden-element");

    const spinner = document.createElement("div");
    spinner.classList.add("dark-spinner");
    form.insertAdjacentElement("beforeend", spinner);

    postData(
      url,
      JSON.stringify({
        name: document.querySelector(".form__input-name").value,
        mail: document.querySelector(".form__input-mail").value,
        phone: document.querySelector(".form__input-phone").value,
        message: document.querySelector(".form__textarea-msg").value,
      })
    )
      .then(() => {
        infoMsg.textContent = "Ваше сообщение успешно отправлено!";
        infoMsg.classList.add("success-msg");
        infoMsg.classList.remove("error-msg", "hidden-element");
        form.reset();
      })
      .catch((error) => {
        infoMsg.textContent = `Во время отправки сообщения произошла ошибка. ${error}`;
        infoMsg.classList.add("error-msg");
        infoMsg.classList.remove("success-msg", "hidden-element");
      })
      .finally(() => {
        spinner.remove();
      });
  });
}

export default formSending;
