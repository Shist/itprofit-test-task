"use strict";

function modalWindow() {
  const btnOpenModal = document.querySelector(".main__btn-open-modal");
  const modalWindowWrapper = document.querySelector(".modal-window-wrapper");
  const closeBtn = document.querySelector(".modal-window-wrapper__close-btn");
  const okBtn = document.querySelector(".modal-window-wrapper__btn-ok");

  btnOpenModal.addEventListener("click", () => {
    modalWindowWrapper.classList.remove("hidden-element");
  });

  modalWindowWrapper.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-window-wrapper")) {
      modalWindowWrapper.classList.add("hidden-element");
    }
  });

  closeBtn.addEventListener("click", () => {
    modalWindowWrapper.classList.add("hidden-element");
  });

  okBtn.addEventListener("click", () => {
    modalWindowWrapper.classList.add("hidden-element");
  });
}

export default modalWindow;
