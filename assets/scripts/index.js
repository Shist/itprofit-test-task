"use strict";

import formSending from "./modules/form-sending";
import formValidation from "./modules/form-validation";
import modalWindow from "./modules/modal-window";

document.addEventListener("DOMContentLoaded", () => {
  formSending("http://localhost:9090/api/registration");
  formValidation();
  modalWindow();
});
