(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-thank-open]"),
    closeModalBtn: document.querySelector("[data-thank-close]"),
    modal: document.querySelector("[data-modal-thank]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();